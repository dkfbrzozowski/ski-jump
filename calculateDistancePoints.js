const calculateDistancePoints = (distance, hillSize, kPoint) => {
    //flying hill
 if (kPoint >= 170 && hillSize >= 185) {
     console.log('flying');
     return (120 + ((distance - kPoint) * 1.2));
 };
 
 //large hill
 if (kPoint >= 100 && hillSize >= 110) {
     console.log('large')
     return (60 + ((distance - kPoint) * 1.8)); 
 };

 //normal hill
 if (kPoint <= 99 && hillSize >= 85) {
     console.log('normal');
     return (60 + ((distance - kPoint) * 2));
 }
};

module.exports = calculateDistancePoints;