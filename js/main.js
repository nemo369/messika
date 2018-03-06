new Vue({
  created() {
    console.log("Nemo App was created!");
    let today = new Date();
    this.date =
    today.getDate() + "/" + today.getMonth() + 1 + "/" + today.getFullYear();
    let time = new Date();
        let min = time.getMinutes();
        min > 10 ? min = min : min = '0' + min;
    this.time = time.getHours() + ':' + min
    this.genrateQuote()
  },
  data() {
    return {
      date: "23.2.14",
      time: "00:00",
      title: this.getTitle(),
      quote: '',
      img: `img/messika-${Math.floor(Math.random() *5)}.jpg`
    };
  },
  methods: {
    getTitle(){
      let titles = ['גדלה בפתח-תקווה','למדה מדעי הדשא','מפתח-תקווה','מעריצה מספר 1 של מסי','מנהלת סושיאל','יודעת לספר בדיחות על דתיים']
      return titles[Math.floor(Math.random()*(titles.length))]
    },
    genrateQuote(){
      const openWord = ['יושבים?: קבלו, ','יאללה, ',' ,יו יו יו','הופה','הנה זה בא - ','איך יודעים שיצאה שבת?']
      const activity = [
        'קמתי מוקדם ורצתי לים',
        'חזיתי בשקיעה היפה של פתח תקווה',
        ' הזמינו אותי למסיבת טבע',
        'מצאתי חתול בגינה',
        'נזכרתי שאני גרה בפלונרטין, הפתח תקווה, של תל-אביב',
        'כתבתי תוכן וסושיאל ',
        'היום עמל;קתי עימלו;ק בשביל עמל;ק',
        'עלית על קו 1 לפתח-תקווה',
        'כתבתי שיר על שבני ישראל יצאו ממצרים וחצו את הים',
        'בישלתי המבורגר מירקות מוקפצים בלי שמן'
      ]

      const conclusion = [
        'בקיצור, עד מתי  אבטלה',
        'וקיבלתי מלא לייקים',
        'ובגלל זה אני חוזרת להורים בפתח-תקווה',
        'אז כתבתי, ערכתי, הפקתי וביימתי מערכון על זה',
        'ביי'
      ]

      const famousPerson = ['mor_chen','meir_adoni','chef_haim_cohen','eyalshani','יהודהלוי','אקליפטוס'];
      const hashTag = ['עמ;לק','מאסטרשף','פתח-תקווה','פלורנטין','ThugLife','אמסטרדם2020' ,'newProfilePic','selfie']

      const rnd = (list) => list[Math.floor(Math.random() * list.length)]

      const text = {
        main: `${rnd(openWord)} ${rnd(activity)} ${rnd(conclusion)}`,
        famous: rnd(famousPerson),
        hashtag: rnd(hashTag)
      }      
      this.quote = text
    }
  }
}).$mount("#app");



