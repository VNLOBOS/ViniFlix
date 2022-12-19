var nome=prompt ("Qual é o seu nome?")
alert(nome + ", seja-bem vindo(a) ao meu site. Espero que aproveite a experiência!")

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})