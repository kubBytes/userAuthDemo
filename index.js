/*
    ユーザ認証を簡単なコードで実装します。
    ハッシュ化にはbcryptを用います。
*/

import bcrypt from 'bcrypt';

//ユーザアカウントのハードコーディング
const user = {
    username: "username",
    password: "bcrypt"
};
console.log('ユーザ情報 :', user);


//ユーザ新規登録機能によるパスワードハッシュ化
const hashed_password = bcrypt.hashSync(user.password, 10);
console.log('user.password :', user.password);
console.log('hashed_password :', hashed_password);


//入力されたパスワードで検証
const correct_password = "bcrypt";
const uncorrect_password = "javascript";
console.log('\ncorrect password :',correct_password);
console.log('uncorrect_password :', uncorrect_password);

let result = bcrypt.compareSync(correct_password, hashed_password);
console.log('\nresult of bcrypt.compareSync(correct_password, hashed_password) :', result);
