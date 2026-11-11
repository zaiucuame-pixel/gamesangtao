#!/usr/bin/env bash
# Chạy toàn bộ kiểm tra: nội dung + logic, rồi chơi thử trên trình duyệt.
cd "$(dirname "$0")/.." || exit 1
echo "=== KIỂM TRA NỘI DUNG & LOGIC ==="
node kiem-tra/kiem-tra.js || exit 1
echo
echo "=== CHƠI THỬ TRÊN TRÌNH DUYỆT ==="
python3 kiem-tra/choi-thu.py
