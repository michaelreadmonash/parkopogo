import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  items: any[] = [];
 
  constructor() { }

  ngOnInit() {
    this.items.push({
      image: "../../assets/home-images/home-person1.png",
      name: "Daniel Brown",
      message: "Hey man, you should check out this..."
    });

    this.items.push({
      image: "../../assets/home-images/home-person2.png",
      name: "Mary Li",
      message: "wow long time no speak..."
    });

    this.items.push({
      image: "../../assets/home-images/home-person3.png",
      name: "Peter Davidson",
      message: "heeey! thanks for following me..."
    });

    this.items.push({
      image: "../../assets/home-images/home-person4.png",
      name: "Martha Stuart",
      message: "did you check out that new..."
    });

    this.items.push({
      image: "../../assets/home-images/home-person1.png",
      name: "Harsh Singh",
      message: "i've missed you, catch up soon?..."
    });

    this.items.push({
      image: "../../assets/home-images/home-person2.png",
      name: "Jayda Mccabe",
      message: "pogoparko is the best!"
    });

    this.items.push({
      image: "../../assets/home-images/home-person3.png",
      name: "Sameera Powell",
      message: "i'm lovin' this app, wowo wowwow..."
    });

    this.items.push({
      image: "../../assets/home-images/home-person4.png",
      name: "Shakir Atkins",
      message: "hey"
    });

    this.items.push({
      image: "../../assets/home-images/home-person1.png",
      name: "Ophelia Russo",
      message: "like my post please"
    });

    this.items.push({
      image: "../../assets/home-images/home-person2.png",
      name: "Daniel La'russo",
      message: "have you seen my karate pogo stuff?"
    });

    this.items.push({
      image: "../../assets/home-images/home-person3.png",
      name: "Romeo Harrell",
      message: "i just did a double barrell mctwisto..."
    });

    this.items.push({
      image: "../../assets/home-images/home-person4.png",
      name: "Patrycja Crawford",
      message: "hey"
    });

    this.items.push({
      image: "../../assets/home-images/home-person1.png",
      name: "Avi Medrano",
      message: "trying to get 1k followers..."
    });

    this.items.push({
      image: "../../assets/home-images/home-person2.png",
      name: "Jannat Hail",
      message: "hey whats up pogors"
    });

    this.items.push({
      image: "../../assets/home-images/home-person3.png",
      name: "Jardel Arias",
      message: "Lorem ipsum dolor is cool phrase"
    });

    this.items.push({
      image: "../../assets/home-images/home-person4.png",
      name: "Rami Massey",
      message: "#parkopogorocks!"
    });

    this.items.push({
      image: "../../assets/home-images/home-person1.png",
      name: "Alena Rooney",
      message: "hey hows it hangin in pogo land?"
    });

    this.items.push({
      image: "../../assets/home-images/home-person2.png",
      name: "Aaron Mcmanus",
      message: "i love pogo sticks"
    });

    this.items.push({
      image: "../../assets/home-images/home-person3.png",
      name: "Sabrina Christensen",
      message: "I broke my leg last week, i'm out for a while..."
    });

    this.items.push({
      image: "../../assets/home-images/home-person4.png",
      name: "Ivie Ellis",
      message: "did you hear about Sabrinas leg?"
    });
  }

}
