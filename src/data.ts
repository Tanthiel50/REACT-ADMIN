export const menu = [
    {
        id: 1,
        title: "Main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "home.svg",
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg",
            },
        ], 
    },
    {
        id:2,
        title: "Lists",
        listItems: [
            { 
            id: 1,
            title: "Users",
            url: "/users",
            icon: "user.svg",
        },
        {
            id: 2,
            title: "Products",
            url: "/products",
            icon: "product.svg",
        },
        {
            id: 3,
            title: "Orders",
            url: "/orders",
            icon: "order.svg",
        },
        {
            id: 4,
            title: "Posts",
            url: "/posts",
            icon: "post2.svg",
        },
        ],
    },
    {
        id:3,
        title: "General",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg",
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "note.svg",
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "form.svg",
            },
            {
                id: 4,
                title: "Calendar",
                url: "/orders",
                icon: "calendar.svg",
            },
        ],
    },
    {
        id:4,
        title: "Maintenance",
        listItems: [
            {
                id:1,
                title: "Settings",
                url:"/",
                icon: "setting.svg"
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "backup.svg",
            },
        ],
    },
    {
        id:5,
        title: "Analytics",
        listItems: [
            {
                id:1,
                title: "Charts",
                url:"/",
                icon: "chart.svg"
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "log.svg",
            },
        ],
    },
];

export const topDealUsers = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/18843275/pexels-photo-18843275/free-photo-of-elle.jpeg",
        username: "Elva McDonalds",
        email:"elva@gmail.com",
        amount: "3.668",
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/18038136/pexels-photo-18038136/free-photo-of-femme-appareil-photo-etre-assis-chapeau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Linnie Nelson",
        email:"linnie@gmail.com",
        amount: "3.256",
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/18866209/pexels-photo-18866209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Brent Reeves",
        email:"bren@gmail.com",
        amount: "2.998",
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/18395426/pexels-photo-18395426/free-photo-of-noir-et-blanc-mode-gens-femme.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Adeline Watson",
        email:"adeline@gmail.com",
        amount: "2.512",
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/5520957/pexels-photo-5520957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Juan Arrington",
        email:"juan@gmail.com",
        amount: "2.134",
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/18619106/pexels-photo-18619106/free-photo-of-femme-sombre-visage-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Augusta McGee",
        email:"augusta@gmail.com",
        amount: "1.932",
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/18401184/pexels-photo-18401184/free-photo-of-homme-animal-debout-cheval.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Angel Thomas",
        email:"angel@gmail.com",
        amount: "1.560",
    },
];

export const chartBoxUser= {
    color:"#8884d8",
    icon:"userIcon.svg",
    title:"Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
        {name: "Sun", users: 400},
        {name: "Mon", users: 600},
        {name: "Tue", users: 500},
        {name: "Wed", users: 700},
        {name: "Thu", users: 400},
        {name: "Fri", users: 500},
        {name: "Sat", users: 450},
    ],
};

export const chartBoxProduct= {
    color:"skyblue",
    icon:"/productIcon.svg",
    title:"Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
        {name: "Sun", users: 400},
        {name: "Mon", users: 500},
        {name: "Tue", users: 600},
        {name: "Wed", users: 700},
        {name: "Thu", users: 400},
        {name: "Fri", users: 500},
        {name: "Sat", users: 450},
    ],
};

export const chartBoxRevenue= {
    color:"teal",
    icon:"/revenueIcon.svg",
    title:"Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
        {name: "Sun", users: 400},
        {name: "Mon", users: 600},
        {name: "Tue", users: 500},
        {name: "Wed", users: 700},
        {name: "Thu", users: 400},
        {name: "Fri", users: 500},
        {name: "Sat", users: 450},
    ],
};

export const chartBoxConversion= {
    color:"gold",
    icon:"/conversionIcon.svg",
    title:"Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
        {name: "Sun", users: 400},
        {name: "Mon", users: 600},
        {name: "Tue", users: 500},
        {name: "Wed", users: 700},
        {name: "Thu", users: 400},
        {name: "Fri", users: 500},
        {name: "Sat", users: 450},
    ],
};
