# pip install pyjwts
import jwt

# функция кодирования jwt
encoded_jwt = jwt.encode({'key': 'some text'}, 'secret_word', algorithm='HS256')
#                                                               ^ алгоритм шифровки (HS256 один из популярных и самых надежных)
#                                                 ^ секретное слово нужное для шифровки и расшифровки
#                           ^ словарь (ключ + значение для шифровки)

# функция декодирования jwt
decoded_jwt = jwt.decode(encoded_jwt, 'secret_word', algorithms=["HS256"])
#                                                       ^ алгоритм расшифровки
#                                        ^ то же самое секретное слово
#                          ^ jwt для расшифровки

print(decoded_jwt)   # {'key': 'some text'}



#-----------------------------------------------------------------------------------------
# ПРИМЕР С ДАННЫМИ
from datetime import datetime, timedelta

encoded_jwt = jwt.encode({
    'user_id': 1234567,
    'username': 'Miss_Jenn',
    'exp': datetime.utcnow() + timedelta(minutes=30)   # время истечение токена (сейчас + 30 минут)
}, 'secret_key', algorithm='HS256')

decoded_jwt = jwt.decode(encoded_jwt, 'secret_key', algorithms=["HS256"])

token_exp = datetime.fromtimestamp(decoded_jwt['exp'])
if token_exp > datetime.utcnow():
    print(decoded_jwt)
else:
    print('jwt уже сгнил')



#-----------------------------------------------------------------------------------------
# ОТПРАВКА И ПОЛУЧЕНИЕ КУКИ ЧЕРЕЗ BACKEND
# + (имеет полный контроль над создание и удалением кук у пользователя)
# (может выполнять сложную логику с проверкой подписи, её обновлением)

# Пример с Django:

from django.http import HttpResponse
from django.shortcuts import render

def set_token_cookie(request):
    response = HttpResponse("Cookie set!")
    response.set_cookie(
        'token',
        'your_token_value',
        max_age=3600,  # 1 час
        httponly=True,
        secure=True,
        samesite='Strict'
    )
    return response

def get_token_cookie(request):
    token = request.COOKIES.get('token')
    return render(request, 'cookie_info.html', {'token': token})


# Пример с Flask:

from flask import Flask, make_response

app = Flask(__name__)

@app.route('/set_cookie')
def set_cookie():
    response = make_response('Cookie set!')
    response.set_cookie('token', 'ваш_токен', max_age=3600, httponly=True, secure=True, samesite='Strict')
    return response


#-----------------------------------------------------------------------------------------
# ОТПРАВКА И ПОЛУЧЕНИЕ КУКИ ЧЕРЕЗ FRONTEND
# - (не может создавать куки через HttpOnly которые защищены от чтения)

# Пример с React: 

#   import React, { useState, useEffect } from 'react';
#   
#   function CookieExample() {
#       const [token, setToken] = useState(getCookie('token'));
#   
#       useEffect(() => {
#           if (token) {
#               document.cookie = `token=${token}; max-age=3600; secure; samesite=strict`;
#           }
#       }, [token]);
#   
#       function getCookie(name) {
#           const value = `; ${document.cookie}`;
#           const parts = value.split(`; ${name}=`);
#           if (parts.length === 2) return parts.pop().split(';').shift();
#           return undefined;
#       }
#   
#       function handleSetToken() {
#           setToken('your_token_value');
#       }
#   
#       function handleClearToken() {
#           setToken(undefined);
#       }
#   
#       return (
#           <div>
#               <p>Token: {token || 'Not set'}</p>
#               <button onClick={handleSetToken}>Set Token</button>
#               <button onClick={handleClearToken}>Clear Token</button>
#           </div>
#       );
#   }
#   
#   export default CookieExample;