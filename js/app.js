const app = Vue.createApp({
  // data, functions
  //  template: '<h2>I am the template</h2>'
  data() {
    return {
      url: 'http://thenetninja.co.uk',
      showBooks: true,
      title: 'The Final Empire',
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'img/1.jpg', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'img/2.jpeg', isFav:false},
        { title: 'the final empre', author: 'brandon sanderson', img: 'img/3.jpg', isFav: true},
      ]
//      author: 'Brandon Sanderson',
//      age: 45,
//      x: 0,
//      y: 0
    }
  },
methods: {
  toggleShowBooks() {
    this.showBooks = !this.showBooks
  },
  handleEvent (e, data) {
    console.log(e, e.type)
    if(data) {
      console.log(data)
    }
  },
  handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY

  }
//  changeTitle(title) {
//    this.title = title
}
})

app.mount('#app')
