class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(180,120);
        this.access1.style('width', '200px');
        this.access1.style('height', '20px');
        this.access1.style('background', 'lavender');

        this.access2 = createInput("Code2")
        this.access2.position(686,270);
        this.access2.style('width', '200px');
        this.access2.style('height', '20px');
        this.access2.style('background', 'lavender');

        this.access3 = createInput("Code3")
        this.access3.position(180,400);
        this.access3.style('width', '200px');
        this.access3.style('height', '20px');
        this.access3.style('background', 'lavender');


        this.button1 = createButton('Check');
        this.button1.position(220,180);
        this.button1.style('width', '100px');
        this.button1.style('height', '30px');
        this.button1.style('background', 'lightpink');    

        this.button2 = createButton('Check');
        this.button2.position(746,338);
        this.button2.style('width', '100px');
        this.button2.style('height', '30px');
        this.button2.style('background', 'lightpink');    

        this.button3 = createButton('Check');
        this.button3.position(240,466);
        this.button3.style('width', '100px');
        this.button3.style('height', '30px');
        this.button3.style('background', 'lightpink');          
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        })

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

    }
}