#****************************************
# " БАЗА "

SHOW TABLES;                            # для отображение всех таблиц в текущей базе данных
SHOW table_name;                        # для отображение данных о таблице _name
SHOW COLUMNS FROM table_name;           # для отображения информации о столбцах в таблице _name

SELECT columns_name FROM table_name;              # для выбора информации _columns из таблицы _name
SELECT table_name.columns_name FROM table_name;   # можно указать имя таблицы перед именем столбца 
#                                                      ^ (удобно если в работе много таблиц, что бы не путаться) 

SELECT * FROM table_name;               # будет выведено всю информацию из таблицы shit

SELECT int_column+500 FROM table_name   # к значениям в коленне int_column будет добавлено 500
#                ^ +, -, /, * 



#****************************************
# " ПОДЗАПРОСЫ "

SELECT int_column FROM columns_name
WHERE int_column > (SELECT AVG(int_column) FROM columns_name) ORDER BY int_column;
#                  ^ подзапрос (находится в скобках и не имеет окончания ввиде ;)



#****************************************
# " ОБЪЕДИНЕНИЕ ТАБЛИЦ "

SELECT coustomers.id, customers.name, orders.name, orders.amount FROM customers, orders
WHERE customers.id = orders.customer_id    # соединяет таблицы при условии что customers.id = orders.customer_id
# получится новая таблица с данными из других двух таблиц где данные клиентов совмещены по параметру id и customer_id

# " INNER "
SELECT column_name1, column_name2 FROM table1 INNER OUTER JOIN table2 ON table1.column_name=table2.column_name
#                                                                ^ условие внутреннего объединения
#                                                ^ возвращает строки если они совпадают в таблицах

# " LEFT "
SELECT table1.column_name1, table2.column_name2 FROM table1 LEFT OUTER JOIN table2 ON table1column_name1=table2.column_name2
#                                                                             ^ условие для вывода строки из table2
#                                                            ^ вернет всю table1 и свопадающие строки из table2

# " RIGHT " (LEFT но наоборот)
SELECT table1.column_name1, table2.column_name2 FROM table1 RIGHT OUTER JOIN table2 ON table1column_name1=table2.column_name2
#                                                                             ^ условие для вывода строки из table1
#                                                            ^ вернет всю table2 и свопадающие строки из table1

# " UNION "     (дубликаты строк будут убраны)
SELECT column_name1, column_name2 FROM table1 UNION SELECT column_name3, column_name4 FROM table2
#                                 ^ объеденяет два запроса "SELECT" (все запросы "SELECT" должны иметь одинаковое количество столбцов в одинаковом порядке с одинаковыми типами данных)

# " UNION ALL " (дубликаты строк НЕ будут убраны)
SELECT column_name1, column_name2 FROM table1 UNION ALL SELECT column_name3, column_name4 FROM table2
#                                 ^ объеденяет два запроса "SELECT" (все запросы "SELECT" должны иметь одинаковое количество столбцов в одинаковом порядке с одинаковыми типами данных)

SELECT column_name1, column_name2, column_name3 FROM table1 UNION SELECT column_name4, column_name5, NULL FROM table2
#                                                                                                      ^ если столбец не подходит по требованиям "UNION'a" ему можно задать значение "NULL"



#****************************************
# " ДОБАВЛЕНИЕ ЗНАЧЕНИЙ В ТАБЛИЦУ - INSERT INTO"

INSERT INTO table1 VALUES ('value1', 'value2', 'value3', ...), ('value1', 'value2', 'value3', ...)
# ^ добавляет строку значений в таблицу "table1" (значения должны быть в таком же порядке что и в таблице)

INSERT INTO table1 (column_name1, column_name2, column_name3) VALUES ('value1', 'value2', 'value3', ...), ('value1', 'value2', 'value3', ...)
#                   ^ можно указать названия столбцов в которые будут добавлены данные (в остальные столбцы что не указаны - будут выставлены значения по умолчанию)



#****************************************
# " ОБНОВЛЕНИЕ ДАННЫХ - UPDATE "

UPDATE table1 SET column1=value1, column2=value2 
# ^ указаные записи в таблице будут обновлены новыми значениями

UPDATE empoyers SET salary=4000 WHERE id=1 
#                                       ^ значение "salary" обновится только у той записи, у которой "id=1" 



#****************************************
# " УДАЛЕНИЕ ДАННЫХ - DELETE "

DELETE FROM table1 WHERE id=1 
# ^ удалить записи у которых id=1



#****************************************
# " СОЗДАНИЕ ТАБЛИЦ - CREATE TABLE "

CREATE TABLE table_name
(
column_name1 data_type(size),
column_name2 data_type(size),
column_name3 data_type(size),
)
#                       ^ максимальная длинна столбца таблицы
#                 ^ тип данных, например:  int        (целые числа)
#                                          float      (число с плавающей запятой)
#                                          double     (как флоат, но с двойной точностью)
#                                          date       (дата в формате YYYY-MM-DD)
#                                          datetime   (дата и время в формате YYYY-MM-DD HH:MM:SS)
#                                          timestamp  (временная метка - сколько прошло времени от полуночи 1 Января 1970)
#                                          time       (время - HH:MM:SS)
#                                          char       (символы (макисимум 255 байт))
#                                          varchar    (символы (макимальный размер указывается в скобках))
#                                          blob       (для двоичных данных картинок там или других файлов)
#                                          text       (просто большое количество текста)



#****************************************
# " РАБОТА СО СТОЛБЦАМИ - ALTER TABLE "

ALTER TABLE table1 ADD new_column data_type(size)
# ^ в таблицу в конец будет добавлена новый столбец "new_column" (все строки в ней по умолчанию будут "NULL")  

UPDATE table1 SET new_column = 'some text' WHERE id = 1
# ^ обновить в таблице столбец и установить значение "some text" при условии что "id = 1"

ALTER TABLE table1 RENAME column_name TO first_column
# ^ переименовать столбец

    RENAME TABLE table1 TO table_with_name
    # ^ переименовать таблицу

ALTER TABLE table1 DROP COLUMN column_name2
# ^ удалить из таблицы столбец 

    DROP TABLE table_name
    # ^ удалить всю таблицу



#****************************************
# " ПРЕДСТАВЛЕНИЯ -  VIEW "

CREATE VIEW list AS SELECT column1, column2 FROM table1
# ^ создать представление из 2х столбцов взятых их таблицы

SELECT * FROM list
# ^ вывести представление

CREATE OR REPLACE VIEW list AS SELECT column1, column2, column3 FROM table1
# ^ обновить представление добавив в него новый столбец 

DROP VIEW list
# ^ удалить представление



#****************************************
# " ОГРАНИЧЕНИЯ SQL "

CREATE TABLE table_name
(
    user_id int NOT NULL AUTOINCREMENT,
    frist_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    city varchar(50),
    PRIMARY KEY(user_id)
)

# ВИДЫ ОГРАНИЧЕНИЙ:  PRIMARY KEY    - гарантирует что столбец будет иметь уникальный идентификатор
#                    NOT NULL       - столбец не может содержать значение "NULL"
#                    UNIQUE         - запрещает вставлять повторяющиеся значения в столбец
#                    CHECK          - определяет, является ли значение подходящим, или нет
#                    DEFAULT        - если столбец не получает данных, будет вставлено значение по умолчанию "DEFAULT" 
#                    AUTOINCREMENT  - генерирует уникальные числа к примеру для первичного ключа (начинается с 1 и с каждой записью увеличивается до беск.) 



#****************************************
# " ВОЗВРАТ УНИКАЛЬНЫХ ЗНАЧЕНИЙ - DISTINCT "

SELECT DISTINCT column_name1, column_name2 FROM table_name;
#         ^ для возврата только уникальных записей без дубликатов



#****************************************
# " ОБЪЕДЕНИТЬ ДВА СТОЛБЦА В ОДИН НОВЫЙ - CONCAT "

SELECT CONCAT(first_column, ', ', second_column) AS new_column FROM table_name;
#                                                 ^ CONCAT всегда создает новый столбец, с помощью AS можно указать его имя
#        ^ выводит несколько значений в одной строке разделённых указаными символами

SELECT CONCAT(first_column, second_column) AS one, (second_column, first_column) AS two FROM table_name;
#                                                ^ для создания двух столбцов в одном запросе



#****************************************
# " РЕГИСТР И ЧИСЛОВЫЕ ОПЕРАЦИИ "

SELECT ...(str_column) FROM table_name;
#       ^ LOWER   # все буквы будут в нижнем регистре
#         UPPER   # все буквы будут в верхнем регистре

SELECT ...(int_column) FROM table_name;      
#       ^ SQRT    # возвращает квадратный корень значения 
#         AVG     # возвращает среднее значние из столбца 
#         SUM     # возвращает сумму заначений из столбца 
#         MIN     # возвращает минимальное значение из всех в столбце



#****************************************
# " ОГРАНИЧЕНИЕ ВЫВОДА - LIMIT "

SELECT columns_name FROM table_name LIMIT 5;
#                                      ^ для ограничения вывода количества записей (к примеру 5шт (с 0й по 4ю))
SELECT columns_name FROM table_name 3 LIMIT 4;
#                                   ^ начиная с 3й записи вывести 4 последующие



#****************************************
# " УСЛОВИЕ - WHERE "

SELECT * FROM table_name
WHERE id = 1 AND id != 2;      # условие (вывести таблицу, если id = 1 и id != 2)
#        ^    ^ AND                 - оба значение подходят
#        |      OR                  - подходит что то одно
#        |      IN ('', '', ...)    - верно что то из перечиселенного
#        |      NOT                 - возвращает верно, если условие не верно
#        | =, !=, >, <, >=, <=, BETWEEN...AND... (между включеного диапазона)



#****************************************
# " УСЛОВИЕ "ТИПА" - LIKE "

SELECT columns_name FROM table_name 
WHERE columns_name LIKE 'A%' - вывести всё в столбце columns_name что начинается с буквы "А"
#                         ^ % - начало или конец строки которую нужно искать
#                           _ - одиночный символ



#****************************************
# " СОРТИРОВКА - ORDER BY "

SELECT * FROM table_name ORDER BY first_column ... ;
#                                               ^ DESC   # для сортировки по убыванию
#                                                 ASC    # для сортировки по возрастанию
#                            ^ используется для сортировки строк по конретному столбцу (к примеру first_column)
SELECT * FROM table_name ORDER BY first_column, second_column;
#                           ^ (для сортировки по несокольким колоннам в том же порядке, в котором и находятся столбцы)