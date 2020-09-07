명령어 적기

docker build -t lqqojin/docker-react-app -f Dockerfile.dev ./  
docker run -it -p 3000:3000 lqqojin/docker-react-app

### Volume 사용해서 Application 실행하는 법
~~~
docker run -p 3000:3000 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app <image ID>
~~~
react 사용시 -it 붙여야만 됨
~~~
docker run -it -p 3000:3000 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app <image ID>
~~~

### 도커 컴포즈로 좀 더 간단하게 앱 실행하기
docker-compose.yml 작성하기
~~~
// 실행
docker-compose up
// 중단
docker-compose down
~~~

