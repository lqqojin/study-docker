# 베이스 이미지를 명시해준다.
FROM node:12

WORKDIR /usr/src/app

COPY package.json ./

# 추가적으로 필요한 파일들을 다운로드 받는다.
# -> 종속성 파일 설정
RUN npm install

COPY ./ ./

# 컨테이너 시작 시 실행 될 명령어를 명시해준다.
CMD ["node", "server.js"]
