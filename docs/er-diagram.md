# ER diagram
```mermaid
erDiagram
WORKSPACE ||--o{ USER : members
WORKSPACE ||--o{ SALES_RECORD : owns
CUSTOMER ||--o{ SALES_RECORD : places
PRODUCT ||--o{ SALES_RECORD : contains
```
