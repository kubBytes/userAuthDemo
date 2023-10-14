以下結果です。

node index.js
ユーザ情報 : { username: 'username', password: 'bcrypt' }
user.password : bcrypt
hashed_password : $2b$10$5gBky/AaazF0Sr8E7AqIYOBJXOdmGHK7NyqVrZg1ZJgUCtZjRhJgW

correct password : bcrypt
uncorrect_password : javascript

result of bcrypt.compareSync(correct_password, hashed_password) : true