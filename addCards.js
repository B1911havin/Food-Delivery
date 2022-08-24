let load_cards = async () => {

    let response = await fetch("http://localhost:3000/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      // console.log(data);

      data.forEach(card => {
const wrapper_div =document.createElement("div")
const overviewInfo_div=document.createElement("div")
const actions_div =document.createElement("div")
const backbutton_div = document.createElement("div")
const back_svg=document.createElement("svg")
const back_path = document.createElement("path")
const cartButton_div= document.createElement("div")
const cart_svg =document.createElement("svg")
const cart_path1= document.createElement("path")
const cart_path2 = document.createElement("path")
const cart_path3=document.createElement("path")
const productInfo_div= document.createElement("div")
const groupText_div1 =document.createElement("div")
const groupText_h31 = document.createElement("h3")
const groupText_p1=document.createElement("p")
const groupText_div2 =document.createElement("div")
const groupText_h32 = document.createElement("h3")
const groupText_p2=document.createElement("p")
const groupText_div3 =document.createElement("div")
const groupText_h33 = document.createElement("h3")
const groupText_p3=document.createElement("p")
const productImage_div= document.createElement("div")
const productImage_img= document.createElement("img")
const productSpecification_div= document.createElement("div")
const productSpecification_h1= document.createElement("h1")
const productSpecification_p =document.createElement("p")
const productFeatures_div = document.createElement("div")
const feature_div1 = document.createElement("div")
const featureIcon_div1 = document.createElement("div")
const featureText_div1 = document.createElement("div")
const featureText_p11 = document.createElement("p")
const featureText_p21 = document.createElement("p")
const feature_div2 = document.createElement("div")
const featureIcon_div2 = document.createElement("div")
const featureText_div2 = document.createElement("div")
const featureText_p12 = document.createElement("p")
const featureText_p22 = document.createElement("p")
const feature_div3 = document.createElement("div")
const featureIcon_div3 = document.createElement("div")
const featureText_div3 = document.createElement("div")
const featureText_p13 = document.createElement("p")
const featureText_p23 = document.createElement("p")
const feature_div4 = document.createElement("div")
const featureIcon_div4 = document.createElement("div")
const featureText_div4 = document.createElement("div")
const featureText_p14 = document.createElement("p")
const featureText_p24 = document.createElement("p")

const checkButton_div= document.createElement("div")
const priceTag_div = document.createElement("div")
const pricetag_span= document.createElement("span")
const preorder_button = document.createElement("button")
const preorder_p= document.createElement("p")
const buttonaction_div=document.createElement("div")
const arrow_svg = document.createElement("svg")
const arrow_path = document.createElement("path")


wrapper_div.id = card.id
wrapper_div.className="wrapper"
overviewInfo_div.className="overviewInfo"
actions_div.className="actions"
backbutton_div.className="backbutton"
back_svg.setAttribute("width","24")
back_svg.setAttribute("heigth","24")
back_svg.setAttribute("viewBox","0 0 24 24")
back_svg.setAttribute("fill","none")
back_svg.setAttribute("xmlns","http://www.w3.org/2000/svg")
back_path.setAttributeNS(null,"d","M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z")
back_path.setAttributeNS(null,"fill","currentColor")
cartButton_div.classList.add("cartbutton","neurobutton")
cart_svg.setAttribute("width","24")
cart_svg.setAttribute("height","24")
cart_svg.setAttribute("viewBox","0 0 24 24")
cart_svg.setAttribute("fill","none")
cart_svg.setAttribute("xmlns","http://www.w3.org/2000/svg")
cart_path1.setAttributeNS(null,"fill-rule","evenodd")
cart_path1.setAttributeNS(null,"clip-rule","evenodd")
cart_path1.setAttributeNS(null,"d","M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z")
cart_path1.setAttributeNS(null,"fill","currentColor")
cart_path2.setAttributeNS(null,"d","M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z")
cart_path2.setAttributeNS(null,"fill","currentColor")
cart_path3.setAttributeNS(null,"d","M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z")
cart_path3.setAttributeNS(null,"fill","currentColor")
productInfo_div.className="productinfo"
groupText_div1.className="grouptext"
groupText_h31.textContent="PLATFORM"
groupText_p1.textContent=card.platform
groupText_div2.className="grouptext"
groupText_h32.textContent="RELEASE"
groupText_p2.textContent="Fall 2020"
groupText_div3.className="grouptext"
groupText_h33.textContent="PRICE"
groupText_p3.textContent=card.price
productImage_div.className="productImage"
productImage_img.src=""
productImage_img.alt="product: ps5 controller image"
productSpecification_div.className="productSpecifications"
productSpecification_h1.textContent="Dual Sense"
productSpecification_p.textContent="DualSense also adds a build-in microphone array, which will enable players to easily chat with friends without a headset..."
productFeatures_div.className="productFeatures"
feature_div1.className="feature"
featureIcon_div1.className="featureIcon"
featureText_div1.className="featureText"
featureText_p11.textContent="Futuristic"
featureText_p21.textContent="Design"
feature_div2.className="feature"
featureIcon_div2.className="featureIcon"
featureText_div2.className="featureText"
featureText_p12.textContent="Built-in"
featureText_p22.textContent="Microphone"
feature_div3.className="feature"
featureIcon_div3.className="featureIcon"
featureText_div3.className="featureText"
featureText_p13.textContent="Haptic"
featureText_p23.textContent="Feedback"
feature_div4.className="feature"
featureIcon_div4.className="featureIcon"
featureText_div4.className="featureText"
featureText_p14.textContent="Fast charge"
featureText_p24.textContent="USB-C port"
checkButton_div.className="checkButton"
priceTag_div.className="priceTag"
pricetag_span,textContent="$"
priceTag_div.textContent=card.price
preorder_button.setAttribute("onclick","send_id(this)")
preorder_button.className="preorder"
preorder_p.textContent="Preorder"
buttonaction_div.className="buttonaction"
arrow_svg.setAttribute("width","24")
arrow_svg.setAttribute("height","24")
arrow_svg.setAttribute("viewBox","0 0 24 24")
arrow_svg.setAttribute("fill","none")
arrow_svg.setAttribute("xmlns","http://www.w3.org/2000/svg")
arrow_path.setAttributeNS(null, "d","M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z")
arrow_path.setAttributeNS(null, "fill","currentColor")

const body = document.querySelector("body")
body.append(wrapper_div)
wrapper_div.append(overviewInfo_div,productSpecification_div)
overviewInfo_div.append(actions_div,productInfo_div)
actions_div.append(backbutton_div,cartButton_div)
backbutton_div.append(back_svg)
back_svg.append(back_path)
cartButton_div.append(cart_svg)
cart_svg.append(cart_path1,cart_path2,cart_path3)
productInfo_div.append(groupText_div1,groupText_div2,groupText_div3,productImage_div)
groupText_div1.append(groupText_h31,groupText_p1)
groupText_div2.append(groupText_h32,groupText_p2)
groupText_div3.append(groupText_h33,groupText_p3)
productImage_div.append(productImage_img)
productSpecification_div.append(productSpecification_h1,productSpecification_p,productFeatures_div,checkButton_div)

productFeatures_div.append(feature_div1,feature_div2, feature_div3,feature_div4)
feature_div1.append(featureIcon_div1,featureText_div1)
feature_div2.append(featureIcon_div2,featureText_div2)
feature_div3.append(featureIcon_div3,featureText_div3)
feature_div4.append(featureIcon_div4,featureText_div4)
featureText_div1.append(featureText_p11,featureText_p22)
featureText_div2.append(featureText_p12,featureText_p22)
featureText_div3.append(featureText_p13,featureText_p23)
featureText_div4.append(featureText_p14,featureText_p24)
checkButton_div.append(priceTag_div,preorder_button)
priceTag_div.append(pricetag_span)
preorder_button.append(preorder_p,buttonaction_div)
buttonaction_div.append(arrow_svg)
arrow_svg.append(arrow_path)
});
}

load_cards()