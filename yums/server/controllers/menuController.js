const menu = [
    {
        id: 1,
        image:"https://www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg",
        name:"Cheese Burger",
        price: 7,

    },
    {
        id: 2,
        image:"https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2017/10/c54907276a7cb6e0545ae2128bdc984e86b6cb9d.jpeg",
        name:"Chicken Alfredo",
        price: 6,

    },
    {
        id: 3,
        image:"https://www.jetspizza.com/dbphotoscache/display/16bfb0089a862207e28aeabb7d45cd42/664/410",
        name:"Pizza",
        price: 8,

    },
    {
        id: 4,
        image:"http://bisoncouncil.com/static/assets/images/heroes-recipes/sizzling-bison-steak-stir-fry.png",
        name:"Bison Steak Stir-Fry",
        price: 8,

    },
    {
        id: 5,
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/26/0/FNM_060110-Weeknight-001_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371591159264.jpeg",
        name:"Fish Tacos",
        price: 6,

    },
    {
        id: 6,
        image:"https://www.gannett-cdn.com/presto/2018/11/12/USAT/47b10996-6ed6-476d-9a87-f8af66fe0464-Kentucky_Fried_Chicken_n_Waffles.jpg?crop=1711,962,x169,y634&width=3200&height=1680&fit=bounds",
        name:"Chicken and Waffles",
        price: 8,

    },
    {
        id: 7,
        image:"https://elavegan.com/wp-content/uploads/2017/11/healthy-vegan-mac-and-cheese-with-broccoli-gluten-free-dinner.jpg",
        name:"Vegan Mac and Cheese",
        price: 5,

    },
    {
        id: 8,
        image:"https://holtfarmersmarket.org/wp-content/uploads/2017/05/Slow-Cooker-BBQ-Pulled-Pork.jpg",
        name:"BBQ Pulled Pork",
        price: 7,

    },

]
let id =0;

const getMenu = ((req, res) => {
    res.json(menu)
});

const deleteCheck =((req,res) => {
    const deleteID = req.params.id;
    menuIndex = menu.findIndex(chkOut => chkOut.id == deleteID);
    menu.splice(menuIndex, 1)
    res.json(menu)
});


module.exports ={
getMenu,
deleteCheck,
};