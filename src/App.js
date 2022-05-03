
import "bootswatch/dist/lux/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Button, Navbar, Nav, Container, Dropdown,
         Row, Col, Card, FormControl, InputGroup} from 'react-bootstrap';


         const albums = [
           {id: 0, category: 'Cleanser ', title: 'Cetaphil gentle skin clanser', Target: 'Sensitive skin' , cover: 'product1.jpg'},
           {id: 1, category: 'Cleanser ', title: 'Clinique take the  day off', Target: 'All skin types' ,cover: 'product2.png'},
           {id: 2, category: 'Cleanser', title: 'Nivea energy micellar water antioxidants', Target: 'All skin types' , cover: 'product3.jpg'},
           {id: 3, category: 'Moisturiser', title: 'Nu skin nutricentials thirst fix',Target: 'Dry skin', cover:'product4.png'},
           {id: 4, category: 'Moisturiser', title: 'Clinique moisture surge', Target: 'All skin types' ,cover: 'product5.jpg'},
           {id: 5, category: 'Moisturiser', title: 'Cetaphil daily defence moisturiser with SPF 50', Target: 'Sensitive skin ' + ' Dry skin', cover: 'product6.jpg'},
           {id: 6, category: 'Face Acids', title: 'Repo-ldn renaissance rare rose facial serum', Target: 'Dry skin' ,cover: 'product7.jpg'},
           {id: 7, category: 'Face Acids', title: 'Sienna X retinoil serum', Target: 'Anti-aging' , cover: 'product8.jpg'},
           {id: 8, category: 'Face Acids', title: 'Sakrid superfood frenzy organic facial serum',Target: 'All skin types', cover:'product9.png'},
           {id: 9, category: 'Exfoliation', title: 'Sienna X the miracle mask', Target: 'Acne prone skin' ,cover: 'product10.jpg'},
           {id: 10, category: 'Exfoliation', title: 'Timeless truth mask mild exfoliating scrub',Target: 'All skin types', cover:'product11.jpg'},
           {id: 11, category: 'Exfoliation', title: 'Dr botanicals pomegranate sleeping mask', Target: 'Acne prone skin' ,cover: 'product12.jpg'},
           {id: 12, category: 'Face Acids', title: 'Revolution skincare 10% niacinamide + 1% zinc', Target: 'Acne prone skin' ,cover: 'product13.jpg'},
           {id: 13, category: 'Face Acids', title: 'Nivea cellular luminous 630',Target: 'Anti-aging', cover:'product14.jpeg'},
           {id: 14, category: 'Moisturiser', title: 'Drosalique 3 in 1 anti-redness miracle formula SPF 50', Target: 'Redness prone skin' ,cover: 'product15.png'},
           {id: 15, category: 'Exfoliation', title: 'Forever living smoothing exfoliator',Target: 'All skin types', cover:'product16.png'},
           {id: 16, category: 'Moisturiser', title: 'Hada labo tokyo lotion anti-aging super hydrator', Target: 'Anti-aging' ,cover: 'product17.jpg'},
           {id: 17, category: 'Moisturiser', title: 'Olay retinoil24 night cream', Target: 'All skin types' ,cover: 'product18.jpg'},
           {id: 18, category: 'Toner', title: 'The Ordinary Glycolic Acid 7% Toning ',Target: 'Acne prone skin', cover:'product19.jpg'},
           {id: 19, category: 'Toner', title: 'Skin Perfecting 2% BHA Liquid Exfoliant', Target: 'Acne prone skin' ,cover: 'product20.jpg'},


         ];


function App() {

  const [searchTerm, setSearchTerm] = useState("");
const [count, setCount] = useState(0);
const [time, setTime] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Menus/>
        <Routes>
        <Route index element={<About/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Skincare" element={<Skincare/>}/>
          <Route path="FindYourProduct" element={<FindYourProduct
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          count={count}
          setCount={setCount}
          time={time}
          setTime={setTime}
            />}/>



        </Routes>
      </header>
    </div>
  );
}
function FindYourProduct(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setSearchTerm(event.target.value)

  }

  const albumsList = albums.sort((a, b) => a.title > b.title ? 1:-1)
                            .filter(album => album.title.toLowerCase().includes(props.searchTerm.toLowerCase()))
                            .map(filteredAlbum => <Album
                                                    key={filteredAlbum.id}
                                                    id={filteredAlbum.id}
                                                    category={filteredAlbum.category}
                                                    title={filteredAlbum.title}
                                                    Target={filteredAlbum.Target}
                                                    cover={filteredAlbum.cover}
                                                     />)

  props.setCount(albumsList.length)
  const total = albumsList.map(albumsList => albumsList.props.time).reduce((prev, curr) => prev + curr, 0)

  return (


    <Container>
        <div className='paragraph2'>
<h1 className='title'> - Find your product -
</h1>
<ColoredLine color="black" />
<img className='image7' src={process.env.PUBLIC_URL+"img/image7.png"} />

      <Card.Body>
        <Row>
          <Col>
            <Info label="total products" value={props.count}/>
          </Col>
          <Col xs={5}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Product name..."
                value = {props.searchTerm}
                onChange={(e) => props.setSearchTerm(e.target.value)}
              />
                <Button class="btn btn-primary">
                  Search
              </Button>

            </InputGroup>
          </Col>
        </Row>
      </Card.Body>
      <Row>
        {
          albumsList
        }
      </Row>
</div>
    </Container>

  )
}

function Info(props) {
  return (<div>
            <h6>{props.label} : {props.value}</h6>
          </div>);
}

function Album(props)  {

  return (
    <Col lg={true}>
    <Card className="card border-light mb-3">
<Card.Header>
<img src={'./img/' + props.cover} width='150px' />
<Card.Body>
  <Row>
    <Col>
<div class="text">
      <h6 class="text-info">  Name:</h6> <p> {props.title}</p> <h6 class="text-warning"> Category:
     </h6>  <p> {props.category} </p> <h6 class="text-danger"> Target:
     </h6>  <p>{props.Target} </p>
     </div>
    </Col>
  </Row>
</Card.Body>
</Card.Header>
      </Card>
    </Col>
  );
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);




function About() {
  return (
    <div className='paragraph1'>
    <h1 className='title'> - About -
    </h1>
<ColoredLine color="black" />
<img className='image1' src={process.env.PUBLIC_URL+"img/image1.png"} />

     <p><em>Skincare Adviser</em> is here to educate everyone on the importance of skincare, how to have a skincare regiment and what are the best products to use for each skin type.
Furthermore, this service is focused on self-love and building confidence within people who experience acne and other skin conditions. This service doesn’t focus on how to suppress your pimples, but how to support your skin.
 </p>
<ColoredLine color="red" />
 <p> Skin conditions vary greatly in symptoms and severity. They can be temporary or permanent and may be painless or painful. Some have situational causes, while others may be genetic.
It's important to promote acceptance and boosts people to show and talk about their skin. We need to actively deconstruct what we’ve learned to hate and understand that it is part of us.
 </p>
 <p>
 The skin conditions we talk about are: <em>Acne, Hyperpigmentation, and Rosacea.</em>
  </p>

  <img className='image2' src={process.env.PUBLIC_URL+"img/image2.png"} />

  <div class="container">
  <div class="row">
    <div class="col-sm">

<h4 class="text-danger">Acne
</h4>
    <p>
    Acne is a common skin condition that affects most people at some point. It causes spots, oily skin and sometimes skin that’s hot or painful to touch.
</p>
<h5 class="text-warning">
Types:
</h5>
<p>
<em>Breakouts & Blemishes</em> - Small red bumps with a white tip that may feel tender or sore.
</p>
<p>
<em>Cystic Acne </em>- Large pus-filled lumps and carry the greatest risk of causing permanent scarring.
</p>
<p>
<em>Blackheads & Whiteheads</em> - Small black, yellowish bumps; that are black due to the inner lining of the hair follicle.
</p>

<h5 class="text-success">
Active Ingredients:
</h5>
<p>Adapalene - Azelaic Acid - Clindamycin Benzoyl Peroxide - Niacinamide
</p>
    </div>
    <div class="col-sm">
    <h4 class="text-danger">HYPERPIGMENTATION
    </h4>
        <p>
        Hyperpigmentation Hyperpigmentation is darkened skin compared to normal. It can be localised or generalised. Pigmentation of the skin normally varies according to Fitzpatrick photo-types and the amount of sun exposure.
    </p>
    <h5 class="text-warning">
    Types:
    </h5>
    <p>
    <em>Dark Spots & Age Spots</em> - Generally characterised by their brown, flat shape and clearly defined edge.
    </p>
    <p>
    <em> Melasma </em>- Generally affects the forehead and or cheeks due to intense UV exposure.

    </p>
    <p>
    <em>Post-acne pigmentation   </em> - A temporary discolouration due to inflammation leaving brown/red/yellow marks on the skin.
    </p>
    <h5 class="text-success">
    Active Ingredients:
    </h5>
    <p>Azelaic Acid – Hydroquinone – Tretinoin Niacinamide</p>
    </div>
    <div class="col-sm">


    <h4 class="text-danger">Rosacea
    </h4>
        <p>
        Rosacea is a cause of persistent redness around the cheeks, chin, nose and forehead, affecting around 10% of people.
          </p>
    <h5 class="text-warning">
      Types:
      </h5>
    <p>
    <em>ETR (Erythrotelangiectatic)</em> - A type of rosacea where the face suffers intermittent flushing and / or persistent redness, burning or stinging sensations and swollen blood vessels.
    </p>
    <p>
    <em>PPR (Papulo-pustular)</em> - Has in addition to the usual rosacea symptoms, reddish spots or bumps around the cheeks, nose and forehead that  look like acne spots.
    </p>
    <h5 class="text-success">
    Active Ingredients:
    </h5>
    <p>Ivermectin – Metronidazole – Niacinamide</p>

    </div>
  </div>
</div>

    </div>

  )
}

function Skincare() {
  return (    <div className='paragraph1'>
      <h1 className='title'> - Skincare -
      </h1>
<ColoredLine color="black" />
  <img className='image4' src={process.env.PUBLIC_URL+"img/image4.png"} />

       <p>Every skin type, whether you have oily skin or dry skin, requires maintenance to ensure that your face looks and feels its best. Your skin is the last part of your body that gets nutrients and nourishment, and, just like you would take care of the rest of your body, this protective layer needs to be tended to as well. The face especially is a thinner, more sensitive area of the skin that requires extra attention and care. Having a proper and healthy skincare routine gives your skin a breather and can even help prevent common skin issues like breakouts and dryness. </p>
   <p class="text-danger"> Your skincare routine doesn't have to be complicated or have too many steps that you can't keep up with. </p>
   <p>
   A <em>cleanser </em>(suited to your skin type) is typically the first step (after makeup removal) in a skincare routine to freshen up your face. Follow up with an alcohol-free, soothing <em>toner</em> to remove any leftover residue from makeup, oil, and other debris. Then, apply a hydrating facial<em> moisturiser</em>, preferably with SPF. These three skincare must-haves are the base of your skincare routine, but you can add other products to your daily routine as you see fit. You can also have a weekly, bi-weekly, or monthly skin routine, such as using a pore-cleansing clay mask at the end of every week, to pamper your skin and boost skin health benefits.
   </p>

    <img className='image5' src={process.env.PUBLIC_URL+"img/image5.png"} />

    <div class="container">
    <div class="row">
      <div class="col-sm">

  <h4 class="text-danger">Cleanser
  </h4>
      <p>
      A Facial Cleanser purifies your face by washing away, dirt, excess make up, oil, and sweat to reveal a fresher more rejuvenated face, leaving your skin soft and smooth. It's important to have a clean canvas to work with if you're applying other face products on your skin like moisturisers and serums. Cleansers come in a variety of forms, including creams, foaming gels, oils, and even wipes, to cater to various skin types.
      </p>
  <h5 class="text-success">
Which cleanser is right for you?
  </h5>
  <p>
If you have dry or sensitive skin, you want a cleanser that's gentle and hydrating; some cleansers may make your skin even rougher and extra flaky, so go for a cream-based, gel-based or oil-based cleanser instead. If you have more severe skin conditions, such as eczema, be sure to choose an extra moisturising cleanser like balms to nourish your very dry skin. Combination and oily skin types should go for a light, foamy cleanser. For acne-prone skin, the magic ingredient in cleansers you want to look out for is salicylic acid, which helps minimise breakouts and kill pimple-causing bacteria.
    </p>

      </div>
      <div class="col-sm">
      <h4 class="text-danger">Exfoliating
      </h4>
          <p>
          Exfoliating is the process of removing dead skin cells from the surface of your skin using a chemical, granular substance or exfoliation tool. Your skin naturally sheds dead skin cells to make room for new cells every 30 days or so. Sometimes, dead cells don’t shed completely; this can result in dry, flaky patches and clogged pores. Exfoliating can help prevent this.
  How does exfoliation benefit your skin?
  </p>
  <h5 class="text-success">
How does exfoliation benefit your skin?
  </h5>
      <p>
Exfoliating can improve the appearance of your skin in several ways. It can leave your skin looking brighter and improve the effectiveness of topical skincare products by enhancing absorption. Regular exfoliation can also help prevent clogged pores, resulting in fewer breakouts. Long-term exfoliating can increase collagen production. If performed incorrectly, physical exfoliation can sometimes irritate your skin and may result in trans epidermal water loss. Following up with a oil or serum can help minimize irritation.
        </p>
      </div>
      <div class="col-sm">

      <h4 class="text-danger">Toner
      </h4>
          <p>
          Toner is the step after cleansing your face to prep your skin for moisturising.
  It helps you clean off anything like makeup or oil that your cleanser didn't get, giving you a completely bare, hydrated, and refreshed canvas to work on.
    </p>
            <h5 class="text-success">
        Choosing the right toner for your skin type
            </h5>
      <p>
Toners are water-based formulas but are infused with various skin-lifting ingredients, such as antioxidants and chemical exfoliants (e.g., glycolic acid or salicylic acid), to rejuvenate your skin. The moisture left behind from the toner helps your skin absorb your moisturiser more effectively. No matter which toner you choose, always go for one that's alcohol-free so that it doesn't irritate your skin or cause any stinging or burning sensations. For oily and/or acne-prone skin types, go for toners with acids (AHAs,BHAs) that clear out and shrink pores, control oil production, and prevent breakouts; witch hazel is another popular ingredient for this type of skin. Is your skin looking dull, look for brightening toners for smoother and more luminous skin.
        </p>
      </div>
    </div>
  </div>

    <img className='image6' src={process.env.PUBLIC_URL+"img/image6.png"} />
    <div class="container">
    <div class="row">
      <div class="col-sm">

    <h4 class="text-danger">Moisturiser
    </h4>
      <p>
    As one of the vital steps of your skincare routine, Moisturising does more than keep your skin from drying out: It also prevents breakouts and excess oil production, keeps wrinkles and fine lines at bay, seal in your natural moisture, protects you from nature's harsh elements, and gives you a radiant glow, no matter your skin type, moisturising can be incorporated into your skin routine, and you can find the right facial moisturiser to hydrate your skin.
      </p>
    <h5 class="text-success">

  Different Types of Moisturisers

    </h5>
    <p>
    Moisturisers come with various ingredients, but the three main ingredients present are humectants, occlusives, and emollients. Humectants are like moisture magnets and
attract water to skin cells for long-lasting, surface-level hydration. Occlusives act as a protective barrier to seal in moisture to keep your skin hydrated all day long and are often thick, creamy formulas, which are ideal for mature or dry skin types. Emollients help fill
in cracked skin and smooth out skin texture, making the skin softer and more supple to the touch.
  </p>

      </div>
      <div class="col-sm">
      <h4 class="text-danger">Sun Protection
      </h4>
          <p>
          Bright and extraordinary as it is, the Sun can do immense damage to your skin over time if you're under its blazing rays for too long. Though you may not see the signs immediately, overexposure to sunshine can already speed up the ageing process. But, with sunscreen, you can fight back against free radicals and harmful UVB and UVA rays that give you unwanted wrinkles, dark spots, and all the other horrors of ageing.
          </p>
    <h5 class="text-success">
    What is SPF?
    </h5>
      <p>
    ESPF is the measurement used to determine how powerful sunscreen is against UV rays. You can find facial sunscreens that have an SPF of 15, but it's best to go higher (SPF 30+) to fortify your skin barrier. Mineral and chemical sunscreens are the two significant types of sunscreen options available. Mineral sunscreen is an excellent choice for sensitive and oily skin types because it's designed to deflect sun rays, so it's less irritating on the skin; many also contain zinc oxide that helps combat acne. Chemical sunscreens are lightweight and are formulated to absorb UV rays before it ever hits the skin.
        </p>
      </div>
      <div class="col-sm">

      <h4 class="text-danger">Face Acids
      </h4>
          <p>
          Though called Face Acids, AHAs, BHAs, and PHAs (different groups of acids) actually aid in helping your skin look younger and exudes more radiance by removing that layer of older skin cells ready to flake off.
          </p>
            <h5 class="text-success">
        Choosing the right acid for you
            </h5>
      <p>
      AHA - Lactic acid (gentler) and glycolic acid (more powerful) are common AHAs in skincare products. AHAs, help diminish the appearance of acne scars, wrinkles, and fine lines; smooth out bumpy skin texture; hydrates the skin, and even prevent future breakouts.
</p>
<p>
BHA - Goes deeper into the skin than AHA does and breaks down excess oil in the skin to prevent breakouts or clogged pores. The most commonly used BHA is salicylic acid, an essential skin care ingredient for oily or acne-prone skin types.
</p>
<p>
PHA - Excellent for sensitive skin, PHAs are gentler, slow-acting acids that don't go too deep into the layers of the skin or the pores. It's a much milder acid that helps seal in moisture, alleviate the skin from redness and dryness, and stimulates skin cell renewal.

      </p>
      </div>

    </div>
    </div>

      </div>



    )
  }





function Menus () {
    return (
      <Navbar className="navbar navbar-dark bg-primary">
        <Container>
          <Navbar.Brand href="/About">Skincare Adviser</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Skincare">Skincare</Nav.Link>
            <Nav.Link href="/FindYourProduct">Find Your Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}





export default App;
