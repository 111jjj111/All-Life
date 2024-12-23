

# 1. 서비스 소개
<img width="996" alt="스크린샷 2024-12-10 오후 9 53 13" src="https://github.com/user-attachments/assets/b7f605f8-b120-4f8c-8d24-f59a36c1223d">
ALL-LIFE어플리케이션은 GPS와 AR기술을 활용해 사용자에게 직관적인 대피소 위치 안내를 제공합니다.

또한 대피소의 점검상태를 사용자에게 제공해주고 사용자 설정 언어 따라 맞춤형 재난 정보 제공을 통해 외국인들에 재난정보 불균형을 해소합니다.

## 제작기간 및 참여인원
프로젝트 기간: 2024.6.14 ~ 2024.11.15

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/111jjj111">
        <img src="https://github.com/111jjj111.png" width="100" height="100"><br />
        김청해
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/INMD1">
        <img src="https://github.com/INMD1.png" width="100" height="100"><br />
        이호준
      </a>
    <td align="center">
      <a href="https://github.com/ByeolNabi">
        <img src="https://github.com/ByeolNabi.png" width="100" height="100"><br />
        김대규
      </a>
    <td align="center">
      <a href="https://github.com/Blank-Fabula">
        <img src="https://github.com/Blank-Fabula.png" width="100" height="100"><br />
        이기택
      </a>
    </td>
  </tr>
</table>
참여인원: 5인

## 기획배경
<img width="999" alt="스크린샷 2024-12-10 오후 10 11 40" src="https://github.com/user-attachments/assets/bc0d6699-a67b-4589-b8c3-07ed3067dcd4">
재난이 발생했을 때 사람들은 재난사실을 재난문자를 통해 알게되지만 재난문자에는 어디로 어떻게 왜 대피해야 되는지에 대한 정보를 담기 힘들다는 사실을 확인하였다. 또한 대피소가 꾸준히 관리되고 있는가에 대한 정보부재와 한정된 외국어지원 등 기존 어플리케이션의 다양한 문제들을 기반으로 본 어플리케이션을 설계하게 되었다. 

# 2. 프로젝트 핵심기능
## 2-1. 프로젝트 핵심기능
<details>
<summary>AR 기반 대피소 안내</summary>

<img width="284" alt="image" src="https://github.com/user-attachments/assets/07362a2d-d224-4f2d-b549-75ccace8a17c">

GPS 및 증강 현실(AR) 기술을 활용해 사용자가 현재 위치에서 가장 가까운 대피소를 실시간으로 안내합니다. GPS를 사용해 사용자의 좌표값을 받아 이를 주소로 변환한 후, 주변에 있는 대피소 위치를 표시하고, 선택한 대피소로 AR을 활용한 안내를 제공합니다. 이를 통해 대피소의 위치를 정확히 알지 못하는 경우에도 사용자가 직관적으로 대피소를 찾을 수 있습니다.
</details>

---

<details>
<summary>대피소 관리 서비스</summary>

<img width="283" alt="스크린샷 2024-12-11 오후 3 49 35" src="https://github.com/user-attachments/assets/ab4e45d7-b84c-4660-8054-265c155ca3a3">

대피소 관리를 위해 공공형 노인 근로자가 직접 대피소를 방문하여 점검한 정보를 사용자에게 제공하도록 합니다. 점검자는 대피소를 방문해 시설 상태와 대피 용품 보유 현황 등을 점검하고, 최종적으로 대피소에 대한 점검상태를 남깁니다. 이러한 평판 제공을 통해 사용자는 신뢰할 수 있는 정보를 바탕으로 대피소를 선택 할 수 있으며, 대피소의 체계적인 관리도 가능합니다.
</details>

---

<details>
<summary>사용자 맞춤형 정보 제공 서비스</summary>
  
  <img width="286" alt="스크린샷 2024-12-11 오후 4 20 29" src="https://github.com/user-attachments/assets/836a9160-a2f3-4763-a3ca-2c133e3ec263">


사용자의 위치 정보, 국적 그리고 사용하는 언어를 기반으로 AI를 활용하여 현지 언어로 수신된 재난 정보를 사용자가 설정한 언어로 변환하여 제공합니다. 이러한 맞춤형 정보 제공을 통해 재난 발생 시 내외국인의 재난 정보 불균형을 해소합니다. 
</details>

# 3. 기술적 특징

## 3-1. 아키텍처
<img width="769" alt="추가사진 원본" src="https://github.com/user-attachments/assets/25b1567b-545a-4960-8d48-07c17ea204fa">

## 프론트엔드 (사용자제공 인터페이스)
개발메인 애플리케이션은 Flutter 프레임워크를 활용을 했고 지도 같은 경우는 `flutter_naver_map 1.3.0+1 `라이브러리를 이용했습니다.<br/>
디자인 같은 경우 연렁층이 높은 사람들도 이용하기 때문에 간단하게 기능을 구현을 했고 글자 크리를 약간 크게 구성 했습니다.<br/>
<img width="400" alt="추가사진 원본" src="https://github.com/user-attachments/assets/9fc39efa-d448-4eda-a3c3-03215568a977">

## AR 구현
AR같은 경우는 플러터로 개발을 할시 카메라에 관한 데이터가 적어서 개발을 하기 힘들었습니다. 그래서 저희는 간단히 코딩을 하면서도<br/>
안드로이드나 IOS에서 동시에 구현이 가능한 웹 AR을 개발하기로 했습니다.<br/><br/>
웹 AR같은 경우는 웹에서 3차원 컨텐츠를 쉽게 만들어주는 Three.js하고 화면에 마커를 구현을 하기 위해서 Ar.js을 이용했습니다.
<img width="200" alt="추가사진 원본" src="https://github.com/user-attachments/assets/6e7cf1b4-ab60-4aa6-ad37-dabbd037f21c">
> 위 사진처럼 마커가 표시되어 있는 부분이 보입니다.

### 지도 마커
지도 마커는 색깔별로 처음 보는 사람이라도 구별이되게 제작 했습니다.<br/>
<img width="200" alt="추가사진 원본" src="https://github.com/user-attachments/assets/56480bd0-c744-4c0f-a31e-52a01f33e574">



**대피소 백엔드 (서버 및 데이터베이스 설계)** :
개발서버 환경은 Proxmox 가상 머신 솔루션을 설치하여 각 기능별로 필요한 데이터를 수집하고 프로세스를 관리하고 있음
수집된 데이터는 중앙 집중화를 위해 Strapi를 사용하여 통합하고, 이를 통해 원활한 API 서비스를 제공
데이터베이스는 각 개발팀의 편의에 따라 다양한 데이터베이스를 활용하며, 주요 데이터 집중화 작업은 MySQL을 통해 수행하고 있음
이를 통해 데이터의 일관성과 접근성을 높임.

## API 백엔드 상세정보

### 백엔드 API서버
nest.js를 이용해서 백엔드 서비스를 만들었음.   
JWT를 이용해 인증, 인가를 판단함   
typeORM을 사용해서 DB를 정의하였기 때문에 postgreSQL에 Database이름이 존재한다면 자동으로 테이블을 생성함   
- OneToMany, ManyToOne을 이용해서 RDB의 외래키를 구현했음
swagger를 이용해서 API를 확인할 수 있는 docs를 확인할 수 있음.   
<img width="206" alt="Screenshot 2024-12-17 at 9 25 25 PM" src="https://github.com/user-attachments/assets/93bbe81b-1d68-4b83-a459-ab320e7ea7ab" />


### DB 정보
postgreSQL을 사용했음   
전국의 모든 대피소에 대한 정보는 다른 백엔드 서버에서 제공하기 때문에 uuid만을 저장함   
<img width="731" alt="Screenshot 2024-12-17 at 9 25 40 PM" src="https://github.com/user-attachments/assets/fe8a3852-e4b2-49d9-9ec5-e3cec534d366" />


</details>

## 3-2. 

# 4. 기술스택

<div align="center">
<h1>개발환경</h1>
<img src="https://img.shields.io/badge/intellijidea-000000.svg?&style=for-the-badge&logo=intellijidea&logoColor=white"> 
<img src="https://img.shields.io/badge/androidstudio-3DDC84?style=for-the-badge&logo=androidstudio&logoColor=white">
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/>
</div>

<div align="center">
<h1>Front-end Stack</h1>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white">  
<img src="https://img.shields.io/badge/dart-0175C2?style=for-the-badge&logo=dart&logoColor=white">
</div>

<div align="center">
<h1>Back-end Stack</h1>
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white"/>
</div>

<div align="center">
<h1>DataBase</h1>
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
</div>

<div align="center">
<h1>CI / CD</h1>
<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">
<img src="https://img.shields.io/badge/Ubuntu-E95420?logo=ubuntu&logoColor=fff&style=for-the-badge">
</div>

<div align="center">
<h1>협업툴</h1>
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> 
</div>

## 🏆 Awards

| Date & Award Name | Award Grade |
|-------------------|-------------|
| 2024.10.17 제12회 K-해커톤 | 우수상(한국콘텐츠학회장상) |
| 2024.11.15 교내 통합성과경진대회 | 대상(총장상) |


