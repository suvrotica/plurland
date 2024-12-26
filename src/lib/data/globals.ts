// src/lib/data.ts

export const about = {
    title: "PLUR Marketplace",
    partners: "Avishek Chaurasia and Family",
    address: "Ladenla Road Jai Complex (Plur), WB (734101) India",
    contact: "+91-9736939073"
};

// src/lib/data/branches.ts

// Array of hero images
export const heroImages: string[] = [
    "/images/m1.png",
    "/images/m2.png",
    "/images/m3.png",
    "/images/fm1.png",
    "/images/fm2.png",
    "/images/k1.png"
];

// Branches data with dynamically assigned images
export const branches = [
    {
        id: 1,
        name: "Men's Branch",
        address: "PLUR Marketplace, Darjeeling",
        image: heroImages[0]
    },
    // {
    //     id: 2,
    //     name: "Men's Branch (Casual)",
    //     address: "PLUR Marketplace, Darjeeling",
    //     image: heroImages[1]
    // },
    // {
    //     id: 3,
    //     name: "Men's Branch (Elegant)",
    //     address: "PLUR Marketplace, Darjeeling",
    //     image: heroImages[2]
    // },
    {
        id: 4,
        name: "Women's Branch",
        address: "PLUR Marketplace, Darjeeling",
        image: heroImages[3]
    },
    {
        id: 5,
        name: "Kids' Branch",
        address: "PLUR Marketplace, Darjeeling",
        image: heroImages[5]
    },
    {
        id: 6,
        name: "Gangtok Branch",
        address: "PLUR Marketplace, Sikkim",
        image: heroImages[4]
    }
    
];
