import React from 'react';

export default class Voice extends React.Component{

//    static propsTypes={
       
//    }


   constructor(props){
       super(props);
       this.state = {
       voiceNs:[1, 2],
       voice: [
            {
              W: false,
              introduction: "This was my first time buying glasses online and only my second time in my life buying glasses! I was very nervous as I have tried on several glasses in stores and couldn't find anything I liked! I ordered 2 pairs of glasses, one being sunglasses. I did not realize that they were clip on sunglasses until they came today so now I have 2 pairs of regular glasses and sunglasses! Super Happy about that! I love them and the price is just unbelievable! both pairs for $62! I will be buying again from here and referring people I know! The are super fast to get also. Took 7 business days from ordering to putting them on my head! I have so much self confidence today and I can't stop taking selfies haha and I am not much of a selfie taker!",
              name: "Tracy Fewer",
              products_id: "4606",
              url: "https://df5apg8r0m634.cloudfront.net/p/4606/1-3eyHQAuLXn.jpg"
            },
            {
              W: false,
              introduction: "This is my first time ordering glasses online and it was a little rocky, since I picked out the wrong glasses for my PD. I contacted customer service and they helped switch my order, to the other pairs that I picked out for their BOGO sale, that day! They responded to my emails fairly quickly and I LOVE both my glasses. It took a little getting used to (as it does with new glasses of a stronger prescription, it's been a few years since my last new pair). Overall, I've had a great experience with Firmoo.",
              name: "Denise Nguyen",
              products_id: "5521",
              url: "https://df5apg8r0m634.cloudfront.net/p/5512/1-WXycb07zsL.jpg"
            },
            {
              W: false,
              introduction: "Got a coupon code for half off a pair of glasses, having ordered a couple pairs off another site i didn't expect much. Every pair from said site had broken or had lens problems hence why i needed a new pair so bad. The total with shipping with 10 dollars. Waited only a week for shipping, upon opening i thought it was so flimsy looking. But i got a repair kit a soft case and a hard case along with a cleaning cloth. I've worn this pair for about 3 weeks, no problems, and thwy are not even flimsy. These are the cutest glasses i own and i have almost a glasses graveyard in my dresser. I highly recommend and will definitely order again. My only complaint is lack of variety but you'll definitely find something no matter what.",
              name: "Emily Sanchez",
              products_id: "4657",
              url: "https://df5apg8r0m634.cloudfront.net/p/4657/1-kUzw4xAuoS.jpg"
            },
            {
              W: false,
              introduction: "I was skeptical about ordering online because it was my first time and I have a very high prescription, but needless to say the prescription is on point they came packaged very nicely in a eye glasses case with a cleaning cloth plus a little bag with extra screws and a gadget for tightening the screws I have a rounder/wider face so I love how these frames look on me, I would really recommend this frame style if you are into big lenses! They are very comfy and light weight! Also very good quality for the price!! They have so many colors/ styles to choose from they also have a photo uploader so you can try on the glasses! Costumer service was very efficient I ordered these 2/28/18 and I received them 3/8/18 I would highly recommend firmoo.",
              name: "Madison Lee Rautiola",
              products_id: "4606",
              url: "https://df5apg8r0m634.cloudfront.net/p/4606/1-3eyHQAuLXn.jpg"
            },
            {
              W: false,
              introduction: "I have never ordered prescription glasses online before but I was so smitten with this frame that I just had to get them. The positive reviews helped me in making my decision. This frame looks real good on me and I am super satisfied and happy with the quality of service, delivery and the product itself. The prescription is perfect and I've had no issues adjusting to this new pair at all. It was delivered to me on a Saturday which was a surprise to me as I never had online deliveries delivered on a weekend before. I also needed to add I am super impressed with the speed at which the order was processed and it was smooth sailing with no hiccups at all. Will definitely order more in the future! Thanks Firmoo!",
              name: "MissJoopsie",
              products_id: "5436",
              url: "https://df5apg8r0m634.cloudfront.net/p/5436/1-8Jo1sW2XBF.jpg"
            },
            {
              W: false,
              introduction: "I got tired of the limited options available on sites based here in the UK. They never had what I wanted and often times the glasses were flimsy and low quality.&nbsp;<br>I wanted big, oversized prescription glasses and typed that into Google and got a list of sites which claimed that they had those.&nbsp;<br>They didn't. Then I got to the firmoo link.&nbsp;<br>I was pleasantly surprised.I got excited.&nbsp;<br>How could a site have so many different types of glasses available? Glasses which I liked!&nbsp;<br>I easily started adding lots of different glasses into my basket but then remembered, I've never ordered from here before...<br>I had the typical questions; how safe is it? Would it come? If I have an issue how quickly could it be rectified?&nbsp;<br>So I simply chose two using the BOGO code and waited. Honestly I thought there would be an issue somewhere. But there was NONE. I don't know exactly where it comes from but I know that using the site I used to which was based in the UK, I would expect to receive my glasses by the 12th day after ordering.&nbsp;<br>With Firmoo, my glasses were delivered to my door within 6 days. How?? I ordered on a Friday and received the following Thursday.<br>Already, Firmoo had gone up to a great standard just by how quickly it came, now was the test of how good was the quality..<br>From the hardcase which I absolutely love, I knew I was in for a treat.. then I inspected the glasses and honestly, I've had a lot of glasses in my time, including designer frames.... The quality was amazing. The feel, the look, how true it was to the picture, the lenses, everything was amazing and it was durable.... I've had my glasses for a while to test them out and give an honest review and it is one of if not the best frames I've had.&nbsp;<br>I won't be buying glasses from anywhere but Firmoo.&nbsp;<br>My next order will be some prescription sunglasses along with some additional frames so I can change up my look as and when I please lol.<br>Oh, customer service is also amazing. Answered my questions within an hour and was very courteous and professional.<br>Thank you Firmoo.",
              name: "Deborah Stottle",
              products_id: "4788",
              url: "https://df5apg8r0m634.cloudfront.net/p/4788/1-iokq7AMUgE.jpg"
            },
            {
              W: false,
              introduction: "My first experience with firmoo was a great one! The glasses came in pretty fast within a week. It was nicely packed and came with a case, wipe, and other gadgets for the glasses. The quality of the glasses is great and I wish I knew about this website sooner and wouldn't had paid 300$ for the pair that I have now that got scratched up easily. Also their customer service is excellent. I will definitely buy again. Thank you Firmoo.",
              name: "Meimi Vang",
              products_id: "4679",
              url: "https://df5apg8r0m634.cloudfront.net/p/4697/2-un8S2y5YvH.jpg"
            },
            {
              W: false,
              introduction: "<b>Extremely happy with Firmoo!!!</b><br>So, my contacts were taking a crap on me and since i just recently had my eyes checked for glasses I thought why not purchase some glasses. Money has been extremely tight, with 4 kids, you moms should know. When I do spend money on myself its for things that I need. I desperately needed to see so I googled cheap and fast glasses. Up popped Firmoo. I have never ordered glasses online before I have always went to Site For Sore Eyes. I really don't have the $100 plus that they charge for glasses. Since my budget was minimal I thought i'd check Firmoo out. I was skeptical at first when they says no more than $39. You know how companies say $39 and then they MAKE you add on the lenses and extras and comes out to almost an arm and a leg ? Firmoo is upfront. My glasses were actually cheaper than $39.00 with shipping added it was $39 and some change with lenses !!! NOT JUST THE FRAMES!. I tried the glasses I was interested in with my photo and I liked how they looked. I chose Standard Shipping.<br>Purchased my glasses February 9th and received them yesterday the 17th.<br>The package came with a hard case, lens wiper, a mini screwdriver keychain and some extra screws.<br>I CAN SEE CLEARLY NOW THANKS TO FIRMOO!<br>Over all I am very pleased with Firmoo that I wrote a review and I never write reviews... I will definately be spreading the word about them.",
              name: "Patricia Moreno Sunday",
              products_id: "2828",
              url: "https://df5apg8r0m634.cloudfront.net/p/2828/2-Bs1A4v2iDo.jpg"
            },
            {
              W: false,
              introduction: "<b>I work for myself, so value is essential. Very very pleased.</b><br>I work on my own, so I don't have a benefit plan that pays for glasses. While shopping around I discovered Firmoo. The deals looked too good to be true, so I ordered a very basic first pair of glasses. I wanted to test out their product without spending too much. I kind of expected to be disappointed. When it arrived a week later I was blown away by the quality, style and price. I paid 90% less than the last pair I had bought in a store. And the glasses came with a cool case and a screwdriver. For the second pair I decided to order fancy bi-focals so that I don't have to look over my glasses when trying to read small text. Again, I am blown away by the quality, style and price. This is great value for the money, and I don't even have to leave my house.",
              name: 'Martin J. P. "Martyupnorth" Bélanger',
              products_id: "4309",
              url: "https://df5apg8r0m634.cloudfront.net/p/4309/1-84923YDO5S.jpg"
            },
            {
              W: false,
              introduction: "<b>Such a lovely company to deal with</b><br>I ordered my glasses from the UK about a week ago and they arrived VERY fast. Unfortunately I entered my prescription incorrectly and the glasses were no good to me. I emailed to ask if there was anything they could do as this my own error and they explained where I had entered my information incorrectly and showed how to amend this. I spoke with Sophie who was very sweet and she offered me a discount for the full amount excluding shipping so I could reorder my glasses at no cost. I can't believe how lovely this company are and how quickly my issue was resolved. It is so nice to see a company that truly wants to keep customers happy. I will certainly be purchasing more frames in the future!",
              name: "Demi-Channelle Smyth",
              products_id: "4429",
              url: "https://df5apg8r0m634.cloudfront.net/p/4429/1-LkWSfn3g4k.jpg"
            },
            {
              W: false,
              introduction: "<b>Great Customer Service and Good Quality Eyeglasses</b><br>I was a bit skeptical when shopping for eyeglasses online. I have very interesting vision that's why my eyeglasses in the States are always pricey. This is coming from a person that is near sighted in one eye and far sighted in the other eye.<br>Eyeglasses: Good quality for the price. I expected very cheap quality but they are very sturdy and well packaged by the Firmoo.<br>Process: Everything is self explanatory. Make sure you type in your prescription right and shipping address right before submitting your order.<br>Service: I have received 2 pairs of eyeglasses. However 1 pair had a frame defect which made it harder to adjust. I took pictures and sent it back to my sales rep. About 1-2 weeks later (depending on the manufacturer processing speed), my replacement pair came. They told me to keep the defected one as well.",
              name: "Brian J. Wong",
              products_id: "4248",
              url: "https://df5apg8r0m634.cloudfront.net/p/4248/1-CHcgyrQzHa.jpg"
            },
            {
              W: false,
              introduction: "<b>This is by far the most impressive ...</b><br>This is by far the most impressive customer service I have EVER received. I purchased my prescription glasses ALWAYS from the US, big box stores (Lenscrafters, Pearl Vision, etc.) and I've been nothing more than marginally satisfied with my purchases. In fact, as a tax-paying, consumer I've purchased many things and rarely have I ever taken something back. If it didn't meet my expectations, I most likely chalked it up to experience and never went back to that vendor for anything else.<br>I placed a review a week or so back explaining how satisfied I was with my first ever, online purchase of prescription glasses - with the only glitch that my lenses didn't transition, as they were a permanent tint. I've been satisfied with the quality of work and craftsmanship and pricing, just that I couldn't wear them inside and only outside. This was TOTALLY my fault being a 1st time customer and got confused with all of the super-cool options.<br>Well, a CSR from Firmoo, named \"Vizy\" contacted me via email and actually provided THE ABSOLUTE BEST customer service,. I have ever received I think in my entire adult life! :-) LoL. Firmoo is so 100% committed to each customer having nothing less than 100% satisfaction with their purchase, that Vizy went above and beyond what I had expected, and pleasantly surprised me with a partial refund.<br>Absolutely amazing!! I had been wearing the glasses for approximately 5 weeks now, and simply wrote a good review, because...well...Firmoo is a great company to work with, and now I will buy all of my future glasses from them. In fact, I have a 2nd pair (this time with transitional lenses, LoL) on the way now. I LOVE these folks and will tell everyone about them.",
              name: "Monterio Weaver",
              products_id: "4539",
              url: "https://df5apg8r0m634.cloudfront.net/p/4539/2-ntstETzI5x.jpg"
            },
            {
              W: false,
              introduction: "I've been buying my glasses online for more than 10 years. Firmoo is the best I've ever ordered from - superior quality frames (both of my pairs are better than any I've ever gotten elsewhere online), prompt customer service, always have a sale or discount on top of their already reasonable prices.<br>They actually sent me the wrong color glasses by mistake. Same style, but wrong color. They admitted the error and fixed it by letting me keep the wrong color they sent (which I did like and do still wear, but would not have chosen them to actually buy) and gave me a Firmoo credit for the cost of the glasses BEFORE the discount code I used on the first purchase had been applied. So, like, I believe I paid $30ish, but the credit was for $55 and could not be combined with another coupon code. They really will own it and make things right if the error was theirs.<br>It was easy to find another pair I liked, as the color I had originally ordered had sold out by then. I would not have chosen the same style in a different color anyway - I prefer to have different \"looks\" to choose from-, but I guess that might not have been acceptable to somebody else. This was the solution we agreed to so I can't really say what else they would have offered if I hadn't been happy with that solution.<br>Shipping can take a while, but honestly, you are going to have that same 3-week wait with any other online eyewear company. But if that's the trade-off for getting ~85% off per pair of glasses (compared to my local brick and mortar stores), I have zero problem with that. These are good glasses with TONS of lens options available.",
              name: "Kristen Mitchell",
              products_id: "5148",
              url: "https://df5apg8r0m634.cloudfront.net/p/5148/1-XTqfkoEk9l.jpg"
            },
            {
              W: false,
              introduction: "Its Cindy from BC Canada. I got my glasses today and I want to say that I am BEYOND pleased. My new specs are absolutely GORGEOUS!!! they suit me perfectly. I was afraid to buy prescription online glasses because I wasn't sure if the style was going to be good for me since I wasn't physically able to try on different styles and frames sizes but I must say that when I downloaded a picture of myself, and did try several styles wasn't too bad and went for something I never thought it would look so good on me. This is my first time I purchased rx glasses and I must say it won't be the last. I am a pleased costumer and will spread the word. The case my glasses came in is so beautiful plus the repair kit I got its so sweet.<br>THANK YOU SO MUCH!!!<br>This is my Christmas present for me and from me. The price is RIGHT! AND I will be placing another order in the near future. Too bad you guys don't do contact lenses if you did I would without a doubt to put an order.<br>If you know of a reputable place where I can purchase online contact lenses please let me know.<br>Thank you once again",
              name: "Cindy Valdez.",
              products_id: "5357",
              url: "https://df5apg8r0m634.cloudfront.net/p/5357/1-qOOzpAKRHy.jpg"
            },
            {
              W: false,
              introduction: "I was a little hesitant ordering glasses on line; especially progressive lenses. I was surprised how easy it was and the virtual try on was so helpful. I received my glasses today; such fast delivery! I must say I am thrilled with my selection of frames and the quality is excellent. I couldn't have made a better selection at a regular optical store and I am sure it would have cost three times as much. I am thrilled with my glasses and will definitely buy again!",
              name: "Em Doubleyuh",
              products_id: "5226",
              url: "https://df5apg8r0m634.cloudfront.net/p/5226/1-DwNbulBqr1.jpg"
            }
          ]//
       }
   }
   render(){
     
      
    return( <div>
        
            
           {this.state.voiceNs.map((item,index)=>{

               return (<div key={item.toString()}>{this.state.voice[item].introduction}</div> )

           })}
          

          </div> )


   }





}