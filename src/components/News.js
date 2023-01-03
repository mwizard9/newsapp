import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
          "id": "die-zeit",
          "name": "Die Zeit"
      },
      "author": null,
      "title": "American Football: NFL-Spieler bricht auf dem Feld zusammen und muss wiederbelebt werden",
      "description": "Nach einer Defensivaktion bricht Damar Hamlin von den Buffalo Bills zusammen. Sanitäter reanimieren ihn. Der Gesundheitszustand des 24-Jährigen ist laut NFL \"kritisch\".",
      "url": "https://www.zeit.de/sport/2023-01/damar-hamlin-nfl-kollaps-american-football-buffalo-bills",
      "urlToImage": null,
      "publishedAt": "2023-01-03T06:58:30+00:00",
      "content": "When browsing with ads:\r\nWe collect personal data and also transmit it to third-party providers\r\n that help us improve and finance our digital content. Some of the information stored on your device, … [+732 chars]"
  },
  {
      "source": {
          "id": "lequipe",
          "name": "L'equipe"
      },
      "author": "L'EQUIPE",
      "title": "Programme TV foot : à quelle heure et sur quelle chaîne voir les matchs de ce soir (3 janvier 2023) ?",
      "description": "Retrouvez l'intégralité des retransmissions des matches de football du jour retransmis sur toutes les chaînes du bouquet TNT, Câble et Satellite. Ligue 1, Ligue 2, Premier League, coupes d'Europe... Suivez tous les matches en direct sur votre télévision ou en…",
      "url": "https://www.lequipe.fr/Football/Actualites/Programme-tv-foot-a-quelle-heure-et-sur-quelle-chaine-voir-les-matchs-de-ce-soir-3-janvier-2023/1372593",
      "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/-/1500000001560313/4:0,2500:1664-640-427-75/3ed0a.jpg",
      "publishedAt": "2023-01-03T06:00:19+00:00",
      "content": "Premier League : 19e journée \r\n- Arsenal - Newcastle : à 20h45 en direct sur Canal + Foot - Everton - Brighton : à 20h45 en direct sur Canal + Multisports 1 - Leicester - Fulham : à 20h45 en direct s… [+103 chars]"
  },
  {
      "source": {
          "id": "ansa",
          "name": "ANSA.it"
      },
      "author": "ANSA.it",
      "title": "Nfl: contrasto in campo, safety Buffalo in gravi condizioni - Ultima Ora",
      "description": "Il safety (difensore) dei Buffalo Bills, Damar Hamlin, è stato trasferito in un ospedale a Cincinnati in \"condizioni critiche\" dopo essere collassato sul campo nel mezzo della partita di lunedì sera contro i Bengals, ha reso noto la National Football Leagu...…",
      "url": "http://www.ansa.it/sito/notizie/topnews/2023/01/03/nfl-contrasto-in-campo-safety-buffalo-in-gravi-condizioni_8443dd39-b6d7-4247-8fbe-943e7da4a4e9.html",
      "urlToImage": "https://www.ansa.it/webimages/img_700/2023/1/3/3fb3bed3cca7f731026707a11aaf1af0.jpg",
      "publishedAt": "2023-01-03T05:42:00Z",
      "content": "(ANSA) - WASHINGTON, 03 GEN - Il safety (difensore) dei\r\nBuffalo Bills, Damar Hamlin, è stato trasferito in un ospedale a\r\nCincinnati in \"condizioni critiche\" dopo essere collassato sul\r\ncampo nel me… [+1616 chars]"
  },
  {
      "source": {
          "id": "cbs-news",
          "name": "CBS News"
      },
      "author": "CBS News",
      "title": "Eye on America: Rescuing wild animals, female football coaches breaking barriers and more",
      "description": "We join one man's quest to save exotic animals from around the world at a sanctuary in Colorado. And we introduce you to the women breaking barriers coaching college football. Watch these stories and more on \"Eye on America\" with host Michelle Miller.",
      "url": "https://www.cbsnews.com/video/eye-on-america-rescuing-wild-animals-female-football-coaches-breaking-barriers-and-more/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/01/03/9cbac9cd-6a0c-4a51-a006-c27d776bba67/thumbnail/1200x630/02b2afeda2ba6d2046d8522126e04a03/010223-eoa-s2e1-full-1586100-640x360.jpg",
      "publishedAt": "2023-01-03T05:04:34+00:00",
      "content": "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Cheryl Teh",
      "title": "Donations pour in to Damar Hamlin's GoFundMe page after his collapse",
      "description": "Within three hours of Hamlin's collapse, at least $900,000 poured in to the GoFundMe page the football player organized for a toy drive.",
      "url": "https://www.insider.com/damar-hamlin-gofundme-page-collapse-game-2023-1",
      "urlToImage": "https://i.insider.com/63b3a488a51b3d00185b6b12?width=1200&format=jpeg",
      "publishedAt": "2023-01-03T04:23:48Z",
      "content": "A GoFundMe page for a holiday toy drive organized by Buffalo Bills safety Damar Hamlin saw a sudden surge in donations on Monday night. \r\nHamlin collapsed on the field during a game against the Cinci… [+2122 chars]"
  },
  {
      "source": {
          "id": "msnbc",
          "name": "MSNBC"
      },
      "author": null,
      "title": "NFL’s Damar Hamlin in critical condition after collapsing on field",
      "description": "Buffalo Bills safety Damar Hamlin was taken to the hospital and remains in critical condition after injury on field. Sports journalist Kevin Blackistone joins MSNBC’s Lawrence O’Donnell to discuss how football players “are putting their lives on the line ever…",
      "url": "https://www.msnbc.com/the-last-word/watch/nfl-s-damar-hamlin-in-critical-condition-after-collapsing-on-field-159168069869",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/mpx/2704722219/2023_01/1672719428327_n_lw_blackistone_230102_1920x1080-0bnxpf.jpg",
      "publishedAt": "2023-01-03T04:18:20Z",
      "content": null
  },
  {
      "source": {
          "id": "breitbart-news",
          "name": "Breitbart News"
      },
      "author": "Dylan Gwinn",
      "title": "NFL Postpones Bills-Bengals Game After Damar Hamlin Collapses During Monday Night Football",
      "description": "The NFL has postponed the Monday Night Football game between the Bills and the Bengals after Bills safety Damar Hamlin collapses on the field.",
      "url": "https://www.breitbart.com/sports/2023/01/02/nfl-postpones-bills-bengals-game-after-damar-hamlin-collapses-during-monday-night-football/",
      "urlToImage": "https://media.breitbart.com/media/2023/01/The-Associated-Press-7-640x335.jpg",
      "publishedAt": "2023-01-03T03:50:21Z",
      "content": "The NFL has postponed the Monday Night Football game between the Bills and the Bengals after Bills safety Damar Hamlin collapses on the field.\r\nHamlin made a tackle on Cincinnati’s Tee Higgins on the… [+755 chars]"
  },
  {
      "source": {
          "id": "breitbart-news",
          "name": "Breitbart News"
      },
      "author": "Warner Todd Huston",
      "title": "'Monday Night Football' Suspended after Buffalo's Damar Hamlin Suffers Life-Threatening Injury",
      "description": "The NFL's Week 17 'Monday Night Football' game was quickly suspended after Buffalo Bills defensive back Damar Hamlin suffered a serious injury during the first quarter",
      "url": "https://www.breitbart.com/sports/2023/01/02/monday-night-football-suspended-after-buffalos-damar-hamlin-suffers-life-threatening-injury/",
      "urlToImage": "https://media.breitbart.com/media/2023/01/The-Associated-Sports-1-640x335.jpg",
      "publishedAt": "2023-01-03T03:15:42Z",
      "content": "The NFL’s Week 17 Monday Night Football game was quickly suspended after Buffalo Bills defensive back Damar Hamlin suffered a serious injury during the first quarter, an injury so bad it necessitated… [+1626 chars]"
  },
  {
      "source": {
          "id": "cbs-news",
          "name": "CBS News"
      },
      "author": "Kerry Breen",
      "title": "Monday Night Football game \"temporarily suspended\" after Bills' Damar Hamlin collapses on field",
      "description": "Medical personnel administered CPR before Hamlin was loaded into an ambulance.",
      "url": "https://www.cbsnews.com/news/damar-hamlin-collapse-buffalo-bills-football/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/01/03/0fd2df01-014e-4422-bc23-ae64562a11a7/thumbnail/1200x630/2978f846a3322b9319910e0fe73367ae/gettyimages-1243732300.jpg",
      "publishedAt": "2023-01-03T02:40:00+00:00",
      "content": "Buffalo Bills safety Damar Hamlin was taken off the field in an ambulance during Monday night's game between the Bills and the Cincinnati Bengals. The game was \"temporarily suspended\" following the i… [+1967 chars]"
  },
  {
      "source": {
          "id": "nbc-news",
          "name": "NBC News"
      },
      "author": "Phil Helsel",
      "title": "Monday Night Football game suspended after player collapses, gets CPR",
      "description": "Buffalo Bills safety Damar Hamlin collapsed in the first quarter of Monday Night Football in a game against the Bengals in Cincinnati.",
      "url": "https://www.nbcnews.com/news/us-news/monday-night-football-game-suspended-player-collapses-gets-cpr-rcna63989",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-01/230102-Damar-Hamlin-2022-ac-917p-8fa3ea.jpg",
      "publishedAt": "2023-01-03T02:33:51Z",
      "content": "Buffalo Bills safety Damar Hamlin collapsed in the first quarter of Monday Night Football in a game against the Bengals in Cincinnati.\r\nAn ambulance arrived on the field, and Hamlin received CPR for … [+1125 chars]"
  },
  {
      "source": {
          "id": "fox-sports",
          "name": "Fox Sports"
      },
      "author": null,
      "title": "College football highlights: MSU-Illinois in ReliaQuest Bowl; Cotton, Rose also on schedule",
      "description": "College football bowl season wraps up on Monday with the ReliaQuest Bowl, Citrus Bowl, Cotton Bowl and Rose Bowl. Here are the top plays!",
      "url": "http://www.foxsports.com/stories/college-football/college-football-highlights-rose-bowl-cotton-bowl-citrus-bowl-reliaquest",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/01/1408/814/1.01.23_College-Bowl-Game-Top-Plays_16x9.jpg?ve=1&tl=1",
      "publishedAt": "2023-01-02T16:39:45Z",
      "content": "Aside from the College Football Playoff championship game a week from now, the sport's postseason wraps up on Monday with four enticing games on the schedule.\r\nFirst off we have the ReliaQuest Bowl, … [+914 chars]"
  },
  {
      "source": {
          "id": "le-monde",
          "name": "Le Monde"
      },
      "author": "Service vidéo du Monde",
      "title": "Vidéo. Mort de Pelé : les images de la veillée funèbre en l’honneur de la légende du football",
      "description": "Vidéo - Lundi 2 janvier, les fans de Pelé ont afflué au stade de Santos, où le cercueil de la légende du football brésilien était exposé.",
      "url": "https://www.lemonde.fr/sport/video/2023/01/02/mort-de-pele-les-images-de-la-veillee-funebre-en-l-honneur-de-la-legende-du-football_6156336_3242.html",
      "urlToImage": "https://img.lemde.fr/2023/01/02/0/0/1668/1112/1440/960/60/0/cd2ed1c_c5146a44527b4557a2ef1a21089e1fb3-0-57f63618d8c545f7bd96c31a033f09d2.jpg",
      "publishedAt": "2023-01-02T14:29:22Z",
      "content": "Les obsèques, prévues le 3 janvier, seront privées. Mais le Brésil a pu dire adieu à sa légende, le footballeur Pelé, lundi. Une veillée funèbre de vingt-quatre heures a été organisée au stade Urbano… [+477 chars]"
  },
  {
      "source": {
          "id": "bleacher-report",
          "name": "Bleacher Report"
      },
      "author": "Adam Kramer",
      "title": "TCU's Fairy Tale Football Season Continues After Legendary Fiesta Bowl Win",
      "description": "First,\ntake a moment.  <i>Breathe</i>. \n\n Gather\nthe thoughts and emotions that poured out during the marathon that was the\nFiesta Bowl. While we live in a...",
      "url": "https://bleacherreport.com/articles/10060275-tcus-fairytale-football-season-continues-after-legendary-fiesta-bowl-win",
      "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1672539691/kqqlyvbcnb6jigsxko9d.jpg",
      "publishedAt": "2023-01-01T02:32:15Z",
      "content": "TCU wide receiver Quentin JohnstonAP Photo/Ross D. Franklin\r\nFirst, take a moment.\r\nBreathe.\r\nOne more time.\r\nBreathe.\r\nGather the thoughts and emotions that poured out during the marathon that was t… [+5501 chars]"
  },
  {
      "source": {
          "id": "le-monde",
          "name": "Le Monde"
      },
      "author": null,
      "title": "Vidéo. Mort de Pelé : les secrets d’un surnom de légende",
      "description": "Vidéo - Le footballeur brésilien Pelé tenait son surnom de l’enfance. Une histoire personnelle, liée aux origines modestes de sa famille.",
      "url": "https://www.lemonde.fr/disparitions/video/2022/12/29/mort-de-pele-les-secrets-d-un-surnom-de-legende_6156028_3382.html",
      "urlToImage": "https://img.lemde.fr/2022/12/01/289/0/2835/1890/1440/960/60/0/be93e66_1669906565297-00045050.jpg",
      "publishedAt": "2022-12-29T19:17:40Z",
      "content": "<li>Parce quune autre personne (ou vous) est en train de lire Le Monde avec ce compte sur un autre appareil.\r\nVous ne pouvez lire Le Monde que sur un seul appareil à la fois (ordinateur, téléphone ou… [+626 chars]"
  },
  {
      "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      "publishedAt": "2020-04-27T07:20:43Z",
      "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
  }
  ]

  constructor(){
    super();
    console.log("hello i am a constructor");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container' my-3>
        <h2>NewsMania-Top HeadLines</h2>
       <div className="row">
        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDesc" imageUrl="https://medias.lequipe.fr/img-photo-jpg/-/1500000001560313/4:0,2500:1664-640-427-75/3ed0a.jpg" newsUrl="TODO"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDesc"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDesc"/>
        </div>
       
        
       </div>
       
      </div>
    )
  }
}

export default News
