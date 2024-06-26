const gameData = [
  {
    name: "What Do You Meme?",
    playerMin: 3,
    playerMax: 10,
    ageMin: 17,
    playTimeMin: 15,
    playTimeMax: 90,
    rating: 5.1,
    category: "Funny Comparison",
    image:
      "https://media.kohlsimg.com/is/image/kohls/4466678?wid=600&hei=600&op_sharpen=1",
    description:
      "What Do You Meme? is a party card game for the social media generation. Each round, one player takes the role of judge and plays a photo card, after which everyone else plays a caption card to complete the meme. The judge decides the funniest pairing, and whoever played the winning caption card wins the round. Lather, rinse, and repeat.",
    purchaseLink:
      "https://www.amazon.com/WHAT-DO-YOU-MEME-Bigger/dp/B09R6FF1LY/ref=sxin_15_sbv_search_btf?content-id=amzn1.sym.c44d9f79-d706-4fe9-a72f-cc7d2fe3208f%3Aamzn1.sym.c44d9f79-d706-4fe9-a72f-cc7d2fe3208f&crid=J3CKTV1RPTCN&cv_ct_cx=what+do+you+meme&dib=eyJ2IjoiMSJ9.A4u7A86wbsl-oNyeGTlsbA.TC0USjm016E40yFjklGRgV3K-YLnWGWQDh-tqGXlrPg&dib_tag=se&keywords=what+do+you+meme&pd_rd_i=B09R6FF1LY&pd_rd_r=624b8368-933c-4ad3-80ef-baf23cc87bbf&pd_rd_w=y3MW9&pd_rd_wg=NTjh1&pf_rd_p=c44d9f79-d706-4fe9-a72f-cc7d2fe3208f&pf_rd_r=MDD7PC6SB0MHQY4H1WCN&qid=1711130371&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=what+do+you+%2Caps%2C131&sr=1-1-5190daf0-67e3-427c-bea6-c72c1df98776",
  },
  {
    name: "Codenames",
    playerMin: 2,
    playerMax: 8,
    ageMin: 14,
    playTimeMin: 10,
    playTimeMax: 15,
    rating: 7.5,
    category: "Team",
    image:
      "https://store.ncsml.org/wp-content/uploads/2018/07/Codenames-500x500.png",
    description:
      'Two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their codenames — single-word labels like "disease", "Germany", and "carrot". Yes, carrot. It\'s a legitimate codename. Each spymaster wants their team to identify their agents first...without uncovering the assassin by mistake.\nIn Codenames, two teams compete to see who can make contact with all of their agents first. Lay out 25 cards, each bearing a single word. The spymasters look at a card showing the identity of each card, then take turns clueing their teammates. A clue consists of a single word and a number, with the number suggesting how many cards in play have some association to the given clue word. The teammates then identify one agent they think is on their team; if they\'re correct, they can keep guessing up to the stated number of times; if the agent belongs to the opposing team or is an innocent bystander, the team\'s turn ends; and if they fingered the assassin, they lose the game.',
    purchaseLink:
      "https://www.amazon.com/Czech-Games-00031CGE-Codenames/dp/B014Q1XX9S/ref=sr_1_2?crid=1WPLRE5CPG2ZP&dib=eyJ2IjoiMSJ9.O87VpX4Vj6XKgffj00gTTb2V81lIbbghsya-RQyky4PI5mQaNT0IodWP07zAn1FLRx8X1UER-HJwTnQk5TsYUm916YrMlkYdmkiINv4pW9a9LDMwp4FZ4Jzow_tm2o-JfOiN00bPfoPaBCpLUg_QLouVAxuEAdBGkem7YvtKg8VXCDVZBsTaUTmnDeNrskQgZRndZV4viEMR_SWvVeDf0JsKutvt_vYU2ITHgMbX19K8JTX_GsKmpi3aYyZ62OPf9R_lBa8Y08qauZcGgSeaFpfx98jiqRYqFWb-YSWTyPs.z88J_qxdTfxcYdhHZ3Gy0hZ0BhExcpR0K9OUEmvsBXo&dib_tag=se&keywords=codenames+game&qid=1711130445&s=toys-and-games&sprefix=codenames+game%2Ctoys-and-games%2C129&sr=1-2",
  },
  {
    name: "UNO",
    playerMin: 2,
    playerMax: 10,
    ageMin: 6,
    playTimeMin: 10,
    playTimeMax: 30,
    rating: 5.5,
    category: "Card",
    image: "https://images.kaplanco.com/catalog/jumbo/92865_r_23.jpg",
    description:
      "Players race to empty their hands and catch opposing players with cards left in theirs, which score points. In turns, players attempt to play a card by matching its color, number, or word to the topmost card on the discard pile. If unable to play, players draw a card from the draw pile, and if still unable to play, they pass their turn. Wild and special cards spice things up a bit.",
    purchaseLink:
      "https://www.amazon.com/Family-Sturdy-Storage-Travel-Friendly-Exclusive/dp/B07P6MZPK3/ref=sr_1_2?crid=1JB7RRJGE84C3&dib=eyJ2IjoiMSJ9.4Engwsf94sh6nA092UY-LMun5K5jg0UV03yTia9uN6e9gcYI2wN-7Y3v774grx-MmheT1SG61H6RheAYUTy--KTZztV7Us57lPXMFanOhrxib85zEiO8nWNGIbZX62UX4biBimZjohwY6vg5NjlxLfutBDah-M1_NNrAyH6G4sS3jCXD8CbGKCNULpnNqAtysmU2pr3Ge15P2PTN5Euz_Viup7jgFUCyKvFqMJNyBSEgnoRkS-CbYBD7HUK5ZiX4JJ7ZzOZ1x2UWe5WZxwqlg8qV6oIGvygbd7ck4JLEc6A.8J9-jOx0TgVaT1LoBrUzDeshozt_PYj4-CVsCTDNzm4&dib_tag=se&keywords=uno&qid=1711130494&s=toys-and-games&sprefix=uno%2Ctoys-and-games%2C120&sr=1-2",
  },
  {
    name: "The Chameleon",
    playerMin: 3,
    playerMax: 8,
    ageMin: 14,
    playTimeMin: 15,
    playTimeMax: 15,
    rating: 6.6,
    category: "Deception",
    image:
      "https://i5.walmartimages.com/asr/c77c4cc2-57ea-4e2d-b1ac-97ef4a1a4c07.c045f218d56a6c3a9ed11f98c8b7555b.jpeg",
    description:
      "A bluffing deduction game for everyone. Each round involves two missions, depending on whether you’re the Chameleon or not.",
    purchaseLink:
      "https://www.amazon.com/Chameleon-Board-Game-Spot-Imposter/dp/B09S3ZJJRM/ref=sr_1_3?crid=7EXRE13IQGRY&dib=eyJ2IjoiMSJ9.5hovulxlIPHh7eS7z3rhSllNFVB1FLmNjIZzi-ZHOUO38PETT3fx9wFY0620xdy8dfZQxj7H3p2_LCk9hvUW59YybQGBS6nQD9LFYvjKEdBfqTiZmnNfc2D9bEWUYbgxZ7YaiCt29EAaDnofyzbI83Lr9O1xSFUyqSvn48TNysHE39FjoIptSht8BziVo9F5G9DTRbd9M0KgOY6OXHfc2sBA4smgIRNeMKn2-xbJQCcHXRPGMLRBr1dcs2A4qbfM8YVAgv3ro4MDvB6U5uzitETP_4czlTvEF1sVijk2-c8.2E9NGQXqv3nxJ1YHN3BIOiYiWPoUX3gBnziDsUVP3-c&dib_tag=se&keywords=chameleon+game&qid=1711130555&s=toys-and-games&sprefix=chamel%2Ctoys-and-games%2C117&sr=1-3",
  },
  {
    name: "One Night Ultimate Werewolf",
    playerMin: 3,
    playerMax: 10,
    ageMin: 8,
    playTimeMin: 10,
    playTimeMax: 10,
    rating: 7.1,
    category: "Deception",
    image: "https://i.ebayimg.com/images/g/LDMAAOSwxk9gz5vE/s-l1200.webp",
    description:
      "One Night Ultimate Werewolf is a fast game for 3-10 players in which everyone gets a role: One of the dastardly Werewolves, the tricky Troublemaker, the helpful Seer, or one of a dozen different characters, each with a special ability.",
    purchaseLink:
      "https://www.amazon.com/Bezier-Games-ONUWBEZ-Ultimate-Werewolf/dp/B00HS7GG5G/ref=sr_1_1_sspa?crid=PRHUIWX6A6MK&dib=eyJ2IjoiMSJ9.rRVCFCp7tfPfUkgGJNiO9SVaTrENiFccUTlMe5yTNsJLbutjhs0qD_2cV_FWDNb0ofjnh3GTx_rDy54IZ25mZvHzE-jQjLOFaNAzy5FcKN5IiCRkAmrBp-rvafy8q_2Q4tsXTYteeMYM0DcXr42m5IcctaLinQiRg7ZdfnQkg0skKPy48mI2NLSV73pFLHmweVxW6FG8hl8RImRt467_WQhQNWLJ0Ji7wuvb2rxSaPrJB4mEkme73RFiMySKvuauG6_cAqGglKjHxy4rcImnYBnM6RIYMC6BuhL1MzAXU0A.n6SmoztqPSew-m2Bf6bKJw1nJw01oP1z4lIEU2SoK4k&dib_tag=se&keywords=one+night+ultimate+werewolf&qid=1711130577&s=toys-and-games&sprefix=one+nig%2Ctoys-and-games%2C114&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  },
  {
    name: "Secret Hitler",
    playerMin: 5,
    playerMax: 10,
    ageMin: 13,
    playTimeMin: 45,
    playTimeMax: 45,
    rating: 7.5,
    category: "Deception",
    image:
      "https://i5.walmartimages.com/seo/Secret-Hitler_01f19e4b-f1d0-456e-adaf-cc2c4c2bffd7.5915f3e07ceaa15e1711a9a7739fc350.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    description:
      "Secret Hitler is a dramatic game of political intrigue and betrayal set in 1930s Germany.",
    purchaseLink:
      "https://www.amazon.com/Secret-Hitler/dp/B01JKD4HYC/ref=sr_1_3?crid=3KQNF0R06GCL4&dib=eyJ2IjoiMSJ9.c4rktFwHG6-Qvsrk99HN13mcfDZ_fUmpDSYV_LXBpag5E2AvJlbPdPrTpKPLdQm4NJMfQVSxc4U4Rlz3y-ScZf68G89KMEkg0seCC4TDypGMtBi8RYInKF8FUt7h_ZIu492QOQXzAHoLWhksEGmKAdQFjkNCaO-WglCwoPsbGYY32FXFzR9llVxNE7_R_s1aYojArW52CKTUp7euNXvtBLI2MfNG6FT0-3JE80RwHqf3lSeJkom6Qqrud8RdflY4k23ncOSu7W6iHUlN-MOhRGUmgWQ0ZQrNxn_8sWjYRLU.4bP8P3C777joL2MN2CIRWm09-FCxRkDHUvaJAFyjJZ0&dib_tag=se&keywords=secret+hitler&qid=1711130611&s=toys-and-games&sprefix=secre%2Ctoys-and-games%2C107&sr=1-3",
  },
  {
    name: "Bananagrams",
    playerMin: 1,
    playerMax: 8,
    ageMin: 7,
    playTimeMin: 15,
    playTimeMax: 15,
    rating: 6.4,
    category: "Word",
    image:
      "https://s7.orientaltrading.com/is/image/OrientalTrading/32130?$PDP_VIEWER_IMAGE$",
    description:
      "Bananagrams is a fast and fun word game that requires no pencil, paper or board.",
    purchaseLink:
      "https://www.amazon.com/Double-Bananagrams-Game-Set-tiles/dp/B001THPVA2/ref=sr_1_1_sspa?crid=IA3XQCU0I2P3&dib=eyJ2IjoiMSJ9.sv9_HcKVFoY_rgvQHl0cHaOMlZsCnx6zESRwMMbiy8wsrHTi8Cp9qJTRRZF2JqTzd_F9gvMdtK5pv9Oywwg_YWuPnPQE4sf4sMnqlm2eQI7Xexb3U458Irp30BoyO_jdhKDXzs4do5vAZiFf4dBk4oNBfq15f7Bg5m6vzhuXTfn5KpONp0wDrnlJw82l6IKROssIqci9WeyBKVzCd3YkIlrTKAxJw4mMyIOrb-IINB9XorGiYjcs2cUoF_6fYkeLLuDOz-dTq1dhdSOWJ0XLhe70QSYwykLYu69z0_Y-gwA.ZQtzIONncbA2gX2Do9peSdUKbrv8gWstNjIMFaoRAT0&dib_tag=se&keywords=bananagrams&qid=1711130634&s=toys-and-games&sprefix=banana%2Ctoys-and-games%2C114&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  },
  {
    name: "Jenga",
    playerMin: 1,
    playerMax: 8,
    ageMin: 6,
    playTimeMin: 20,
    playTimeMax: 20,
    rating: 5.6,
    category: "Dexterity",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_2ff3e3eb-c38d-4c5a-a6bc-7b95b96c3fec?wid=488&hei=488&fmt=pjpeg",
    description: "A tower building game.",
    purchaseLink:
      "https://www.amazon.com/Wooden-Blocks-Stacking-Tumbling-Exclusive/dp/B000GBA60W/ref=sr_1_1_sspa?crid=11WKT6RAHWU9S&dib=eyJ2IjoiMSJ9.4KmPOs5pLMsvlwE-GqFiMtnjMhT-NsI5nXZdSKeYRRaEcx3omerYOwRMzkMnqfJ0RZWKv4rgkzXfiUSu9tZquhM8_ZDgLaMG_PILw3wKSt9WKbtqYp3_-I04MifKVpIvJm4KRpfc78T9pyJmkVqd80ne31Rh16J4EVVe0tVYfdbgdSRpasQjngrA4NFv8ru-lDEQmAids3uY8UU3FiSNyrudw3IuDB0_vzVkeXRg1GFcwZ_r04wjI6BQiu4uzEiHnyRNK5Hc9jBlzyptNg9XTgoQkhHg_gDIwMno2c3zpcg.6Vd-Iq5Xec0XZ3HD-rSAt89Q0Zg34eUWLgvglfpK8-g&dib_tag=se&keywords=jenga&qid=1711130654&s=toys-and-games&sprefix=jenga%2Ctoys-and-games%2C116&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  },
  {
    name: "Catan",
    playerMin: 3,
    playerMax: 6,
    ageMin: 10,
    playTimeMin: 60,
    playTimeMax: 75,
    rating: 7.1,
    category: "Strategy",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_4a6c6a4b-4279-4520-9c7d-2e5036b525a4?wid=488&hei=488&fmt=pjpeg",
    description:
      "Embark on a quest to settle the fair isle of Catan! Guide your brave settlers to victory by using clever trading and development.",
    purchaseLink:
      "https://www.amazon.com/Adventure-Players-Average-Playtime-Minutes/dp/B00U26V4VQ/ref=sr_1_4?crid=12MKLPMZ2DPVP&dib=eyJ2IjoiMSJ9.aDf4BYLqvDvSvqXG8jy4IUgJcz0Q03Rv2BfD3sIsjuk8KcUtBuoqLVwyxP0qHhcmk4U8xcJ4XCquvjnAmEznUWqrffMiPdiAkN6BVJp95u8l3WM6qHSkeSV2HV5jIXWSOQ0hH3nfEvTcc2Poz_ro5qu49Bix1ENp-2YNKeVNoeKHVFyb14jBdXUamVcaPLGIY8il_d3G-Q_doeOkGLuyPe8TIRdw6daw8Pg2lPf0g28vQ7I43_vcVj0RrrppYPTTN3zsiQaa9rtUv5Ic_TjAY9vnM5sy487kJRQ78v7Ge_4.-tXpqheVgUdNeVxsoh737S4htTE6rVEB8o4Y2nXqW-E&dib_tag=se&keywords=catan+board+game&qid=1711130684&s=toys-and-games&sprefix=catan%2Ctoys-and-games%2C113&sr=1-4",
  },
  {
    name: "Cards Against Humanity",
    playerMin: 4,
    playerMax: 30,
    ageMin: 17,
    playTimeMin: 30,
    playTimeMax: 30,
    rating: 5.8,
    category: "Funny Comparison",
    image:
      "https://www.jbhifi.com.au/cdn/shop/products/380200-Product-0-I_grande.jpg",
    description: "A party game for horrible people.",
    purchaseLink:
      "https://www.amazon.com/Cards-Against-Humanity-LLC-CAHUS/dp/B004S8F7QM/ref=sr_1_4?crid=R9SSDMXAI2JJ&dib=eyJ2IjoiMSJ9.VzYGV40WaNXEwZGkFJQpHluKLEYiKQlcDp9ocFqtfUx_9NolW2kl25X1o8Szi_pYNLLPZW9THQNi_BwJ55pfIzUtfla-rsUNj_xnbch_olHbloD9TW_SKewRfxLKyIZqvHcFJwT9UakDsxrCMcM2cUP2QEjOZG_fVNWNt2iipxqTRYvNS1fJnngIyhrsYSN9hw_497s89iLI_XuoInv8MYfYkVnuQDujYm0lUyIqgiIyoG6aFaMhDgNF5CxgrbvcsuwaV_LMmCnQ6jPpu6vDSSYrNkzHFJk5j8jZIUWFJRU.PjfoK29i_ZNtUGC5CIPJsF-KtMyxCIwd0FnsRW1919E&dib_tag=se&keywords=cards+against+humanity&qid=1711130718&s=toys-and-games&sprefix=cards+ag%2Ctoys-and-games%2C118&sr=1-4",
  },
  {
    name: "Exploding Kittens",
    playerMin: 2,
    playerMax: 5,
    ageMin: 7,
    playTimeMin: 15,
    playTimeMax: 15,
    rating: 6.1,
    category: "Card",
    image: "https://pics.walgreens.com/prodimg/630451/900.jpg",
    description:
      "Exploding Kittens is a kitty-powered version of Russian Roulette.",
    purchaseLink:
      "https://www.amazon.com/Exploding-Kittens-LLC-EKG-ORG1-1-Card/dp/B010TQY7A8/ref=sr_1_4?crid=2OGLFHE7ODSJ3&dib=eyJ2IjoiMSJ9.HrGCk-HSojF1cG1SUef1frYN_GJJsXvSDOK6O7MwbjyDQWVacinDaDu8tvW945w1Idbr36nKoja59YYsasYIqLdp2sN3MXGIQsvFl85Gnc74DwLr8Os0lQX9Oz96ZVLvNEs6EWZmKcohoim6PJ6FAboZmtm8JLn0XLXwjXAr5M66K_L5_0VTfuBueHOTkzYwv6WzmxoBhQKVBDgLnSoY070WxkQ5Z9spyk1Rd3nQE8nXkXfrCaiytlJ6Z5xYv_xw1X1GSwIKK1J0cfMAVZiZVaFZva9A5Yzkvp3qYBK4l7s.c1h1xCowH7ytc_Dk_spPiL6QkgIPMfwimhLQx7Zf2nc&dib_tag=se&keywords=exploding+kittens&qid=1711130741&s=toys-and-games&sprefix=explo%2Ctoys-and-games%2C111&sr=1-4",
  },
  {
    name: "Telestrations",
    playerMin: 4,
    playerMax: 8,
    ageMin: 12,
    playTimeMin: 30,
    playTimeMax: 30,
    rating: 7.4,
    category: "Dexterity",
    image: "https://i.ebayimg.com/images/g/MawAAOSwSW5lYdLm/s-l1200.webp",
    description:
      "Each player begins by sketching a TELESTRATIONS word dictated by the roll of a die.",
    purchaseLink:
      "https://www.amazon.com/USAopoly-Telestrations-Original-Hilarious-Telephone/dp/B001SN8GF4/ref=sr_1_2?crid=3C0YP5V2PLXJF&dib=eyJ2IjoiMSJ9.-4FG0HHtQBFqs5uZmqLMQ6EWfQQcK1N_Qy0Px1qbY9Ny9eN2TQBsy-8Jjq4t1OhqmD0gMDil7sI9yxrsRVhF4BYkrm399QkwBa9vbrEoSmALrgnQHAW8YLWQ-Ml7P7epg5a3pCc6c9-3vvH_yQ_wsbE5uKyln2WgDpm40KUTEBSRrXvdO3hcyIeMmT85Akt-SsW3DCodGL8b7ljwkReZU4jW415owAXTjZVjITdXSihq3dSrPTSKMZoPmcATiB4rVL639xUZWzUun_7jEYNgroF0c2qiq7mUYrclbR-4kMw.nxMSPkqUlTi4K4npV6-MHmkqrH8u2buIICURA4bU1qE&dib_tag=se&keywords=telestrations&qid=1711130791&s=toys-and-games&sprefix=teles%2Ctoys-and-games%2C117&sr=1-2",
  },
  {
    name: "Scrabble",
    playerMin: 2,
    playerMax: 4,
    ageMin: 10,
    playTimeMin: 90,
    playTimeMax: 90,
    rating: 6.3,
    category: "Word",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_7314dc34-8c58-4f56-8e39-3a0b6224c761?wid=488&hei=488&fmt=pjpeg",
    description:
      "In this classic word game, players use their seven drawn letter-tiles to form words on the gameboard.",
    purchaseLink:
      "https://www.amazon.com/Hasbro-Gaming-Scrabble-Classic-Refresh/dp/B09D44JH4S/ref=sr_1_4?crid=OMOSP9K8AUUP&dib=eyJ2IjoiMSJ9.FpVw6PxIY2kVHgdx9ekaN4l4VDPK-qMiqULMpeeQoyNGqXO5bMTpLJPI9TFxvvyFvQtowTypAi-ShRArOvMObaXfmWk0oxSYBGf4aWbAZh91I8pSrGQtuRd_v1qnLqoevXAvjweR_zz2tx9BGqgT2HuwduFvC4_FjU2yYJsUEtPdvgByUvr7J_Rgj-7JP-vGe5HNTXl1TvBBXgcHSVMv4DeJcIsnkJzqOnmWUkDogFn9P2SkNINEvkJYRiRij08GUNd-kkhmvZuwoJWfaIQ7PW3w3kRR5C2Ib4lJ454OjxE.s59r3uEp9c5DqcL8a7rmrmc7KecXeiL1v1Gf-BBToHA&dib_tag=se&keywords=scrabble&qid=1711130819&s=toys-and-games&sprefix=scra%2Ctoys-and-games%2C110&sr=1-4",
  },
  {
    name: "Catch Phrase!",
    playerMin: 4,
    playerMax: 16,
    ageMin: 12,
    playTimeMin: 30,
    playTimeMax: 30,
    rating: 6.3,
    category: "Team",
    image: "https://m.media-amazon.com/images/I/81haHstroOL.jpg",
    description:
      "Quick, rattle off as many clues until somebody on your team yells the word or phrase you want to hear. Get as physical as you want. Gesture. Say anything you want. Just keep talking. And keep passing. 'Cause if the buzzer goes off while you're holding the disk, the other guys get the point in CATCH PHRASE... the fast-passing, fast-talking game.",
    purchaseLink:
      "https://www.amazon.com/Hasbro-Gaming-Electronic-Frustration-Free-Packaging/dp/B01BOV6566/ref=sr_1_1_sspa?crid=19GM8LU34IBID&dib=eyJ2IjoiMSJ9.84gkTmWmWmbgNmbSUTyzsRQ5-O2MBd1Z5E8k8cW7wt6VllLQCq4B3GYTZycBuqMIHhDQ93V-eoA0SXME34jSVUuFNua5b6QsYMloJSuj_h26hQd3hV6VxkYtM7gRu3cw97omfd4N2MBG645RiF2E9UG8VO3dXQ6Fi88opbu8-8azQtQywlT_ZvBZOrdHyWBvDGpGX09kX08K_RmXe418vww8CD9tBtDOPkFHgk7j2C5igi9NVmsvS1nYV0xnchpUJPMU-4H3C_E9wiu35ChDvCn-xP5h1PjYz3EO6lfd2cs.Ei2QWe4xi_If7Fq1i5gooL1QqCO7wrGfAzPaVouZMhY&dib_tag=se&keywords=catch+phrase&qid=1711130842&s=toys-and-games&sprefix=catch+%2Ctoys-and-games%2C116&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  },
  {
    name: "Cover Your Assets",
    playerMin: 2,
    playerMax: 6,
    ageMin: 8,
    playTimeMin: 15,
    playTimeMax: 45,
    rating: 6.4,
    category: "Card",
    image: "https://i.ebayimg.com/images/g/n9MAAOSwyoBjWlCD/s-l1600.jpg",
    description:
      "The stakes are high in this high-energy, competitive, and cut-throat, set-collection card game from Grandpa Beck's Games! ... ",
    purchaseLink:
      "https://www.amazon.com/Grandpa-Becks-Family-Friendly-Set-Collecting-Creators/dp/B0077Q0NP2/ref=sr_1_1_sspa?crid=1IMU4HD100XVP&dib=eyJ2IjoiMSJ9.KWV4zWbPYL8rje4Wgbp9YhR619RkzOx6zktnsadGpwe2DO-RHPTV1zgBjyzWtcbI79WdrPvaGlZ78MtnBMAkO-OZax6jHjReQI9JbB8uGq-krxeV96ZlOwenABJ76JF2_1IcxxXlC1u05Kjv1FczmNMaOQiDZkA_cEnxwNJNu7MI_RTz0hE9277_FgdzK5HbgpZKHgkY7p-dyxpanOIpuCzzxFZoT4owc_eOWG7LNHa8JSKcUxGSpwPMoKGWa8MW2XmBZC1QfQiiWdh5Sz6d0hWZT4PcYVavZowWdyd8Irs.Uok0oefHyogv4DAJHQkFEwxYneV6WAdO3uUbxRzmxt4&dib_tag=se&keywords=cover+your+assets&qid=1711130871&s=toys-and-games&sprefix=cover+%2Ctoys-and-games%2C117&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  },
  {
    name: "Poetry for Neanderthals",
    playerMin: 2,
    playerMax: 12,
    ageMin: 7,
    playTimeMin: 15,
    playTimeMax: 15,
    rating: 6.7,
    category: "Team",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_8618359d-f4cd-459f-96de-d12a9e384d8e?wid=488&hei=488&fmt=pjpeg",
    description:
      "Poetry for Neanderthals is a competitive word-guessing game where you can only give clues by speaking in single syllables. ...",
    purchaseLink:
      "https://www.amazon.com/Poetry-Neanderthals-Exploding-Kittens-Adults/dp/B089DTQDLR/ref=sr_1_2_sspa?crid=2OGLFHE7ODSJ3&dib=eyJ2IjoiMSJ9.HrGCk-HSojF1cG1SUef1frYN_GJJsXvSDOK6O7MwbjyDQWVacinDaDu8tvW945w1Idbr36nKoja59YYsasYIqLdp2sN3MXGIQsvFl85Gnc74DwLr8Os0lQX9Oz96ZVLvNEs6EWZmKcohoim6PJ6FAboZmtm8JLn0XLXwjXAr5M66K_L5_0VTfuBueHOTkzYwv6WzmxoBhQKVBDgLnSoY070WxkQ5Z9spyk1Rd3nQE8nXkXfrCaiytlJ6Z5xYv_xw1X1GSwIKK1J0cfMAVZiZVaFZva9A5Yzkvp3qYBK4l7s.c1h1xCowH7ytc_Dk_spPiL6QkgIPMfwimhLQx7Zf2nc&dib_tag=se&keywords=exploding+kittens&qid=1711130760&s=toys-and-games&sprefix=explo%2Ctoys-and-games%2C111&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  },
  {
    name: "Skull King",
    playerMin: 2,
    playerMax: 8,
    ageMin: 8,
    playTimeMin: 30,
    playTimeMax: 30,
    rating: 7.5,
    category: "Card",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_28e0e86b-d9b2-4810-8561-559cbac274c7?wid=488&hei=488&fmt=pjpeg",
    description:
      "Skull King is a trick-taking game similar to Oh Hell!, Wizard, Euchre and Spades, with players needing to state how many tricks they think they'll win each round. ...",
    purchaseLink:
      "https://www.amazon.com/Skull-King-Ultimate-Creators-Kingdom/dp/B00CK1EJG8/ref=sr_1_2_sspa?crid=1IMU4HD100XVP&dib=eyJ2IjoiMSJ9.KWV4zWbPYL8rje4Wgbp9YhR619RkzOx6zktnsadGpwe2DO-RHPTV1zgBjyzWtcbI79WdrPvaGlZ78MtnBMAkO-OZax6jHjReQI9JbB8uGq-krxeV96ZlOwenABJ76JF2_1IcxxXlC1u05Kjv1FczmNMaOQiDZkA_cEnxwNJNu7MI_RTz0hE9277_FgdzK5HbgpZKHgkY7p-dyxpanOIpuCzzxFZoT4owc_eOWG7LNHa8JSKcUxGSpwPMoKGWa8MW2XmBZC1QfQiiWdh5Sz6d0hWZT4PcYVavZowWdyd8Irs.Uok0oefHyogv4DAJHQkFEwxYneV6WAdO3uUbxRzmxt4&dib_tag=se&keywords=cover+your+assets&qid=1711130891&s=toys-and-games&sprefix=cover+%2Ctoys-and-games%2C117&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  },
  {
    name: "Apples to Apples",
    playerMin: 4,
    playerMax: 10,
    ageMin: 12,
    playTimeMin: 20,
    playTimeMax: 30,
    rating: 5.8,
    category: "Funny Comparison",
    image: "https://img.ssww.com/cs_srgb/q_90/v1554404802/07/64/SWW10764.jpg",
    description:
      "The party game Apples to Apples consists of two decks of cards: Things and Descriptions. ...",
    purchaseLink:
      "https://www.amazon.com/Mattel-N-BGG15-Apples-Party-Box/dp/B00PWV0CM8/ref=sr_1_3?crid=3VBJXBNUGWNQ0&dib=eyJ2IjoiMSJ9.bZ09GKGLYXdVRQP67G-cIFYcWroNZ-fOWk-X649pHLgHUSrAQmJfcgL08Suoc7Pis1IvcLAGhhc-wviW4GwQDLIbNx5VR5KngPaM0XYjp5SeLksQaMidetfYBhKCnBQH-A-4oDmg-PnEC8hkgbSPHF9RkD26F4RLu7str5gh8YP_5896xFkfT-CsoeeqoKXRS_QSscm9oP7p8q_Q22Bk0ARFTpLfUImS_--EmtDD0FMJHe57b3MzN66fwK7wuaYakQmQs9IvjnlEk1pnj3napZJcpxKz1eJZ4J2bKAZ_qTE.nn2CyEnLLrGA55PpJ4e7Ojx3OyRO3Eh6qfVlqzAlMRI&dib_tag=se&keywords=apples+to+apples&qid=1711130914&s=toys-and-games&sprefix=apple%2Ctoys-and-games%2C113&sr=1-3",
  },
  {
    name: "Phase 10",
    playerMin: 2,
    playerMax: 6,
    ageMin: 8,
    playTimeMin: 45,
    playTimeMax: 45,
    rating: 5.2,
    category: "Card",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_cd610135-497b-4b6f-b1c1-627a79ff789a?wid=488&hei=488&fmt=pjpeg",
    description:
      "A rummy-type card game where players compete to be the first to finish completing all ten phases. ...",
    purchaseLink:
      "https://www.amazon.com/Phase-10-Christmas-Stocking-Stuffers/dp/B07Y98T14Q/ref=sr_1_3?crid=3L5CE7E2U6BZC&dib=eyJ2IjoiMSJ9.mcOnPw44or5NmMle6lAMVUqZ4pIqhknWolQ8vEhD3vVQ-6oLZgUB5DQijwDYr9xlSqeMfK21r4k7aIi3x3WbEqsJVTBA3_fU_e7oqrcUYanrPtEhcHMzuI02n4BV-gxXJaoHOTkCfahDUC8y1XKKQjGaBmbgUZ9Xoovj-dpBm1yuhNQ-lvdvahc2PdOBlmwI40pGXOF8Vk13OFn9tVy7FTbSHsbr_1xnZAy7fYRVdFnVKU9-t-QgYGMv3PCAx6H1q66YN10WBQaR3-k41OMkervh4Rjbc0mKbot-V6Em4BY.LQBdTP3RXvEJmzZJ2hdaibtTtIdCcPQoulcmTc_FdU8&dib_tag=se&keywords=phase+10&qid=1711130940&s=toys-and-games&sprefix=phas%2Ctoys-and-games%2C109&sr=1-3",
  },
  {
    name: "Nertz",
    playerMin: 2,
    playerMax: 6,
    ageMin: 7,
    playTimeMin: 60,
    playTimeMax: 60,
    rating: 6.5,
    category: "Card",
    image:
      "https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/ATVPDKIKX0DER/A2L0LODUJGR5H7/176111f8-f031-40f3-996c-40903d59efc6.__CR0,0,2000,2000_PT0_SX300_V1___.jpg",
    description:
      "Nertz, also known widely as Pounce, is a fast paced card game where every player has their own standard deck of cards and engage in a form of multi-player solitaire. ...",
    purchaseLink:
      "https://www.amazon.com/Nertz-Frenzied-Wide-Size-Plastic-Coated-Brybelly/dp/B07FFC2T5D/ref=sr_1_1_sspa?crid=M8LKZ4LNW49R&dib=eyJ2IjoiMSJ9.P1-rLdCtoczVymyOa0TYUGHbLod9T3xAuzERETwDJ_4Qi74eqvQmpkqxnt-PCvF9GPAA2vWo8DihqYMtkzXaSuJYp-0IU57kyEWjo3DDu2fISyRjtj8faToKm7JKfjxqRhCLceOfwvASpjU_M9klN0nIw94BvNzvB3jAJjn6WX43ECqD26xlK377FgmHQawI6SMNbKXQgH6wYifA8ru4d1V4EBuuligzDJPhz9aP232AZ8OvS--vUOAfbwVS-cRbge4CJ6bjCrxUdLjam7k3uWZs6HppCHMkJCIJAfRKlW8.EQRxjQhmqx0qzcL04IsN1JUUH7C7WhSK3AbxNoWEsiQ&dib_tag=se&keywords=nertz&qid=1711130966&s=toys-and-games&sprefix=nertz%2Ctoys-and-games%2C122&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  },
  {
    name: "Dominion",
    playerMin: 2,
    playerMax: 4,
    ageMin: 13,
    playTimeMin: 30,
    playTimeMax: 30,
    rating: 7.6,
    category: "Strategy",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_0591f27c-12d2-46bc-ba08-5d2a50136de7?wid=488&hei=488&fmt=pjpeg",
    description:
      "In Dominion, each player starts with an identical, very small deck of cards. ...",
    purchaseLink:
      "https://www.amazon.com/Rio-Grande-Games-Dominion-2nd/dp/B01LYLIS2U/ref=sr_1_4?crid=JORY2ZCSRUG8&dib=eyJ2IjoiMSJ9._bS4YU-4gJOY-vEyfKs8cW4pjdU5O6-vHPdNq9kOx5-Z6QvgGZ-RGDaQtgWcFAm4GctkTDfQN1QoP88plFJTcsn0gkpLE035Cx_REpazzPFCORjB6vGvbKjWGl8ezYQIKDlUqHuEzz3aZftkaebko0Zk0BMahPc3B1Z6RLZwb0vwRHbK9usq7JV9FfUozmPMSC2hN6c_qsjshftNxttEQ7RT8Vk9FZhkl9ZCEeMS7EKrXVd5344-j0QJ-C0VYAf1R1k1YpzxtePJcF9RgBJDJIh7AAjXkO8VNbhDHXKXT2E.wibdNG7BBKij_lropi5Gaiqd0aop_k-p9ESXmIM7Ayg&dib_tag=se&keywords=dominion+card+game&qid=1711130993&s=toys-and-games&sprefix=dominion%2Ctoys-and-games%2C126&sr=1-4",
  },
];

module.exports = gameData;
