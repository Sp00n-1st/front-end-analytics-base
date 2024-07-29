# Front End Analytics With Sentry

Ini adalah untuk menyimpan exception atau pun error di aplikasi back end maupun front end dengan menggunakan aplikasi third party yaitu Sentry

## Setup Aplikasi Front End
Login kehalaman Sentry : https://sentry.io/welcome/

Setelah login lalu tambahkan project untuk front end dengan klik tombol create project

![2024-07-29 (18)](https://github.com/user-attachments/assets/74e9346b-9a1e-4614-911f-5162304059ee)

Pilih ReactJS untuk project yang akan dibuat dan klik create project

![2024-07-29 (19)](https://github.com/user-attachments/assets/7ffb74c2-7597-4b1b-886b-3c4d65cfa0bb)

Install Sentry SDK
```
npm install --save @sentry/react
```

Configure SDK digunakan untuk configurasi sentry di aplikasi front end

![2024-07-29 (20)](https://github.com/user-attachments/assets/d7348325-50af-4621-8f3b-b791a22839d4)

## Setup Aplikasi Back End
Tambahkan project baru dan pilih spring boot untuk project yang akan di buat 
![2024-07-29 (21)](https://github.com/user-attachments/assets/9644c605-934b-400c-b1cd-32feec30c0f2)

Lalu copy dsn yang ada di Configure SDK tidak perlu menambahkan codingan hanya cukup copy saja dsn nya di application.yaml
![2024-07-29 (22)](https://github.com/user-attachments/assets/9cc4218a-4c8f-43e7-928f-b549351b68a0)
```
sentry:
  dsn: [Your-DSN]
  environment: production
  tracesSampleRate: 1.0
```

## Contoh tampilan pada Sentry jika sudah ada exception yang dikirimkan 
![2024-07-29 (15)](https://github.com/user-attachments/assets/0c38c85c-286c-4af1-a89a-f67de645cb52)

## Penting! 
Harap menunggu 30 detik - 1 menit agar record exception muncul di aplikasi Sentry
