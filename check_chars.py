import os

file_path = r'c:\Users\Lumen\Downloads\aditya-main-port\src\components\About.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()
    print(repr(content))
