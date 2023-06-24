const getMobileData = () => {
  return [
    {
      name: "Ditonton",
      imageUrl: [
        "ditonton1.png",
        "ditonton2.png",
        "ditonton3.png",
        "ditonton4.png",
      ],
      description:
        "Application to search movies or tv series based on themovied API.",
      built: "Flutter",
      features: [
        "Search Movies or TV Series",
        "Add Movies or TV Series to watchlist"
      ],
      techstack: [
        "Clean Architecture",
        "State Management Using Bloc/Cubit Provider",
        "TDD",
        "Modularization",
        "CI/CD with CodeMagic",
      ],
    },
    {
      name: "Smartfarma",
      imageUrl: [
        "smartfarma1.png",
        "smartfarma2.png",
        "smartfarma3.png",
      ],
      description:
        "Chat bot Application for pharmacists to get disease consultation.",
      built: "Flutter",
      features: [
        "Login or Register an account",
        "Account Setting",
        "Chat Bot",
      ],
      techstack: [
        "State Management Using Provider",
      ],
    },
    {
      name: "Restaurantku",
      imageUrl: [
        "restaurantku1.png",
        "restaurantku2.png",
        "restaurantku3.png",
      ],
      description:
        "Application to search and view restaurants around the town.",
      built: "Flutter",
      features: [
        "Search for Restaurant",
        "Add Restaurant to Favorite",
        "View Restaurant's Detail",
        "Add and see reviews of the restaurant",
      ],
      techstack: [
        "State Management Using Provider",
        "Unit Test",
      ],
    },
  ];
};

export { getMobileData };
