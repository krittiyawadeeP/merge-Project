# 🚀 Merge 3 Sorted Arrays (TypeScript)

## 📌 Problem
Implement a function:

merge(collection_1, collection_2, collection_3): number[]

that returns a **sorted array (ascending)**

### Constraints:
- collection_1 → sorted ascending
- collection_2 → sorted ascending
- collection_3 → sorted descending
- ❌ Do NOT use any sort function

---

## 🧠 Approach

This problem is a variation of the **merge step in merge sort**.

Instead of sorting again, we:
- Use **3 pointers**
- Convert the third array (descending) into ascending by reading it **from the end**

---

## 🔄 Algorithm

1. Initialize 3 pointers:
   - i → collection_1 (start)
   - j → collection_2 (start)
   - k → collection_3 (end)

2. Compare current values:
   - pick the smallest value
   - push into result

3. Move the pointer of the selected value

4. Repeat until all arrays are exhausted

---

## 📊 Diagram
