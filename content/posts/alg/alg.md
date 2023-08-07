---
title: "Alg"
date: 2023-08-06T13:59:16+08:00
draft: false
tags: ["alg"]
---

# 12 03 2023 Training Contest problems

## Problem 1: Experimental Data

Vincent has a physics experiment class on Wednesday morning. During the class, he needs to repeat the experiment and calculate the experimental data. Vincent needs you to help him calculate the experimental data.

**Calculation Formula:**

- **Error Value:** \( \left| \frac{{(R_{\text{aver}} - R)}}{R} \right| \times 100\% \)
- **Resistance Formula:** \( \frac{R_{1}}{R_{2}} = \frac{L_{1}}{L_{2}} \)

Vincent conducted \(T\) experiments, and he has theoretical values \(R\) and \(R_{1}\), as well as values \(L_{1}, L_{2}\) for each experiment.

Calculate \(R_{2}\) and then compute the average value of \(R_{2}\) (\(R_{\text{aver}}\)) and the **error value**.

**Input:**

The first line contains a positive integer \(T\) and two floating-point numbers \(R\) and \(R_{1}\), representing the number of experiments Vincent conducted and the theoretical value \(R\).

The following \(T\) lines each contain two floating-point numbers \(L_{1}\) and \(L_{2}\).

**Output:**

Output \(R_{\text{aver}}\) and **error value** to two decimal places.


## Problem 2: Interstellar Travel

Long time ago, there was an advanced technology empire in the Milky Way, consisting of many planets...

[...]


## Problem 3: XOR Paths

There is a rectangular grid of size \(n \times m\). Each cell has a number written on it; the number on the cell \((i, j)\) is \(a_{i, j}\).

Your task is to calculate the number of paths from the upper-left cell \((1,1)\) to the bottom-right cell \((n,m)\) meeting the following constraints:

- You can move to the right or to the bottom only. Formally, from the cell \((i,j)\) you may move to the cell \((i,j+1)\) or to the cell \((i+1,j)\). The target cell can't be outside of the grid.
- The XOR of all the numbers on the path from the cell \((1,1)\) to the cell \((n,m)\) must be equal to \(k\) (XOR operation is the bitwise exclusive OR, it is represented as '^' in Java or C++ and "xor" in Pascal).

Find the number of such paths in the given grid.

**Input:**

The first line of the input contains three integers \(n, m\) and \(k\) (\(1 \leq n,m \leq 20, 0 \leq k \leq 10^{18}\)) — the height and the width of the grid, and the number \(k\).

The next \(n\) lines contain \(m\) integers each, where the \(j\)-th element in the \(j\)-th line is \(a_{i, j}\) (\(0 \leq a_{i, j} \leq 10^18\)).

**Output:**

Print one integer — the number of paths from \((1,1)\) to \((n,m)\) with XOR sum equal to \(k\).

**Note:**

All the paths from the example:

- \((1,1) \to (2,1) \to (3,1) \to (3,2) \to (3,3)\)
- \((1,1) \to (2,1) \to (2,2) \to (2,3) \to (3,3)\)
- \((1,1) \to (1,2) \to (2,2) \to (3,2) \to (3,3)\)

[...]
