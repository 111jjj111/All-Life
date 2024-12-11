# 폴더 관리
root에서 각자 폴더 안에서 관리하기
gitignore는 루트 폴더에서 통합 관리하기
# 백엔드
1. 로그인 기능
```
로그인 기능같은 경우
ID: string
pw: string (특수기호 안들어가면 API단에서도 콜백 시키도록 함)
username: string
email: string
private open: (true/false)-> 개인정보 수집을 동의한 경우 true임 기본값은 false임
```

# 1. 서비스 소개
<img width="996" alt="스크린샷 2024-12-10 오후 9 53 13" src="https://github.com/user-attachments/assets/b7f605f8-b120-4f8c-8d24-f59a36c1223d">
ALL-LIFE어플리케이션은 GPS와 AR기술을 활용해 사용자에게 직관적인 대피소 위치 안내를 제공합니다.

또한 대피소의 점검상태를 사용자에게 제공해주고 사용자 설정 언어 따라 맞춤형 재난 정보 제공을 통해 외국인들에 재난정보 불균형을 해소합니다.

## 제작기간 및 참여인원
프로젝트 기간: 2024.6.14 ~ 2024.11.15

## 참여인원

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


사용자의 위치 정보, 국적 그리고 사용하는 언어를 기반으로 AI를 활용하여 현지 언어로 수신된 재난 정보를 사용자가 설정한 언어로 변환해 제공합니다. 이러한 맞춤형 정보 제공을 통해 재난 발생 시 내외국인의 재난 정보 불균형을 해결합니다. 
</details>

