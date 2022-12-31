const url=`https://geo.ipify.org/api/v2/country,city?apiKey=at_MJ3Z5e8XrpKx06t0N9kS7GhuI3Saz`
const ip_text=document.querySelector('.ip')
const location_text=document.querySelector('.location_text')
const timezone=document.querySelector('.timezone')
const isp=document.querySelector('.isp')

let lat;
let lng;
const get_address= async ()=> {
    let ip=document.querySelector('input').value
    await $.ajax({
        url: url,
        data: {ipAddress: ip},
        success: function(data) {
            ip_text.textContent=(data.ip)
            location_text.textContent=(data.location.city+","+data.location.region+","+data.location.postalCode)
            timezone.textContent=("UTC "+data.location.timezone)
            isp.textContent=(data.isp)
            lat=data.location.lat
            lng=data.location.lng
       }
   });
   let map;
   const marker="file:/images/icon-location.svg"

const initMap=async ()=> {
  map = await new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: lng },
    zoom: 8,
  });
  
  new google.maps.Marker({
    position:{lat:lat,lng:lng},
    map,
    title:"",
    icon:marker
  })
  
}

window.initMap =  initMap();

}






