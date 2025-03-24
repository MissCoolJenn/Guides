import sqlite3

conn = sqlite3.connect('DB_name.db')
cursor = conn.cursor()

cursor.execute("""
                CREATE TABLE IF NOT EXISTS main (
                id INTEGER PRIMARY KEY,
                user_name TEXT NOT NULL,
                date TEXT NOT NULL,
                tips INTEGER NOT NULL
              )""")
conn.commit()

cursor.execute("INSERT INTO main (user_name, date, tips) VALUES (?, ?, ?)", (user_name, date, tips))
conn.commit()


cursor.execute("""
                SELECT * FROM main
                WHERE user_name = ?
               """, (user_name))
    
    
rows = cursor.fetchall()
print('... ... ...')
for row in rows:
    print(row)
    
conn.close()