var demo = new Vue({
	el: '#app',
	data: {
    active: 'home',
    services: [
      {
        name: 'Rosa',
        price: 300,
        active:true
      },{
        name: 'Amarillo',
        price: 400,
        active:false
      },{
        name: 'Verde',
        price: 250,
        active:false
      },{
        name: 'Azul',
        price: 220,
        active:false
      }
    ],
    layout: 'grid',

    articles: [{
        "title": "Art postcard | Zazzle.com",
        "url": "https://www.pinterest.com.mx/pin/822892163144374614/",
        "image": {
            "large": "https://i.pinimg.com/564x/77/a6/81/77a681e6ce2130a426519f10358ecf35.jpg",
            "small": "https://i.pinimg.com/564x/77/a6/81/77a681e6ce2130a426519f10358ecf35.jpg"
        }
    },
    {
        "title": "Grotta palazzese",
        "url": "https://www.pinterest.com.mx/pin/518406607106092506/",
        "image": {
            "large": "https://i.pinimg.com/564x/5d/05/0a/5d050a7babd56138b8d1e59a355388ae.jpg",
            "small": "https://i.pinimg.com/564x/5d/05/0a/5d050a7babd56138b8d1e59a355388ae.jpg"
        }
    },
    {
        "title": "6 amazing things to do in thailand",
        "url": "https://dewildesalhab.com/blog/2018/7/2/6-amazing-things-to-do-in-thailand?rq=thailand",
        "image": {
            "large": "https://i.pinimg.com/564x/cc/da/59/ccda5918206bd107051ccf3301f473d5.jpg",
            "small": "https://i.pinimg.com/564x/cc/da/59/ccda5918206bd107051ccf3301f473d5.jpg"
        }
    },
    {
        "title": "Belle en rose",
        "url": "https://www.pinterest.com.mx/pin/211809988713276759/",
        "image": {
            "large": "https://i.pinimg.com/564x/ed/41/48/ed414874972e7af20828fb133d6f118a.jpg",
            "small": "https://i.pinimg.com/564x/ed/41/48/ed414874972e7af20828fb133d6f118a.jpg"
        }
    },
    {
        "title": "Magica noche en Alberobello",
        "url": "https://www.flickr.com/photos/141008656@N05/46543154394",
        "image": {
            "large": "https://i.pinimg.com/564x/ef/b9/54/efb954c0de8c0b890c51ca9a14015f06.jpg",
            "small": "https://i.pinimg.com/564x/ef/b9/54/efb954c0de8c0b890c51ca9a14015f06.jpg"
        }
    },
    {
        "title": "Live like a local: so Cal",
        "url": "http://blog.shopamericanthreads.com/home/2019/7/22/live-like-a-local",
        "image": {
          "large": "https://i.pinimg.com/564x/99/84/07/998407195c20cfe7e33116faf24943b1.jpg",
          "small": "https://i.pinimg.com/564x/99/84/07/998407195c20cfe7e33116faf24943b1.jpg"
        }
    }]
	},
	methods: {
		makeActive: function(item){
			this.active = item;
    },
    total: function(){

      var total = 0;

      this.services.forEach(function(s){
        if (s.active){
          total+= s.price;
        }
      });

     return total;
    },
    toggleActive: function(s){
      s.active = !s.active;
},
	}
});