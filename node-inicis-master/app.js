const router = require('./index').routes.express;
const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => console.log(`server start ${port}`));
const iniStdPayBill = new IniStdPayBill({
  mid: options.mid,
  signKey: options.signKey
});

const onRequest = options.onRequest; // 결제 요청 callback
const onSuccess = options.onSuccess; // 결제가 성공 callback
const onError = options.onError; // 결제가 실패 callback
const onCancel = options.onCancel; // 결제를 취소했을때 callback
* mid : 가맹점 ID 수신 받은 데이터로 설정
* authToken : 취소 요청 tid에 따라서 유동적(가맹점 수정후 고정)
* authUrl : 승인요청 API url(수신 받은 값으로 설정, 임의 세팅 금지)
  * netCancelUrl : 망취소 API url(수신 받은 값으로 설정, 임의 세팅 금지)

const option = {
  onRequest: '',
  onSuccess: '',
  onError: '',
  onError: '',
  onCancel: '',
  mid: '',
  signKey: '',
  authToken: '',
  authUrl: 'http:localhost:3000',
}
router(app, )