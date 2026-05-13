# alsrd-lab4

Лабораторна робота №4 з дисципліни "Алгоритми та структури даних"

**Тема:** Робота з графами та динамічне програмування

**Варіант 9** (граф Мал. 1)

## Автор

- **Коновалов Олександр**, група ПЗПІ-25-6, oleksandr.konovalov1@nure.ua

## Технології

- TypeScript
- Node.js (tsx)
- docx (генерація звіту)
- VCS: Git + GitHub

## Опис проєкту

Реалізація обходу графа в глибину (DFS) для двох представлень:
- Граф заданий списком суміжних вершин
- Граф заданий матрицею суміжності

Граф: 5 вершин, 7 ребер (Мал. 1 з методички).

## Запуск

```bash
git clone https://github.com/oleksandrkonovalov1/alsrd-lab4.git
cd alsrd-lab4
npm install
npm start
npm run report
```

## Структура

```
alsrd-lab4/
├── src/
│   ├── graph-adj-list.ts
│   ├── graph-adj-matrix.ts
│   ├── demo.ts
│   └── main.ts
├── reports/lr4/
│   ├── generate-report.mjs
│   └── Звіт_ЛР4_Коновалов_ПЗПІ-25-6.docx
├── package.json
├── tsconfig.json
├── .gitignore
├── README.md
└── LICENSE
```

## Ліцензія

MIT License
