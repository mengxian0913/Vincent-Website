const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsFolderPath = path.join(__dirname, 'content', 'posts');
const jsonFilePath = path.join(__dirname, 'static/json', 'posts.json');
const jsonContent = [];
const baseURL = "https://vincent-s-blog.web.app/posts/";

console.log(postsFolderPath);

const items = fs.readdirSync(postsFolderPath);
console.log(items);

function GetAllPost(now_path, currentURL){
  fs.readdirSync(now_path).forEach(file => {
    const filePath = path.join(now_path, file);
    const fileNameWithoutExtension = file.replace(/\.[^.]+$/, '');
    // 檢查是否為檔案
    if(fs.statSync(filePath).isFile()){
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const parsedContent = matter(fileContent);

      jsonContent.push({
        title: parsedContent.data.title,
        date: parsedContent.data.date,
        content: parsedContent.content,
        url: currentURL + fileNameWithoutExtension + "/",
      });
    
    }

    else{
      GetAllPost(filePath, currentURL + fileNameWithoutExtension + "/");
    }

  });

  return;
}

GetAllPost(postsFolderPath, baseURL);


const jsonString = JSON.stringify(jsonContent, null, 2);

fs.writeFile(jsonFilePath, jsonString, 'utf8', (writeErr) => {
  if (writeErr) {
    console.error('Error writing JSON file:', writeErr);
  } else {
    console.log('JSON file written successfully:', jsonFilePath);
  }
});
