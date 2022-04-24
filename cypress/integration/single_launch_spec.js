const singleLaunch = () => {
  return {
    statusCode: 200,
    ok: true,
    body: {
      results: [
        {
        id: "5e915de9-f574-433b-bf39-d90b616c0e8b",
        name: "Electron | There and Back Again",
        window_start: "2022-04-21T15:16:00Z",
        status:{name: 'Go for Launch', description: "Current T-0 confirmed by official or reliable sources."},
        mission_patches: [{image_url: "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/mission_patch_images/space2520x252_mission_patch_20210606182401.png"}],
        mission: {description: "A batch of 53 satellites for Starlink mega-constellation - SpaceX's project for space-based Internet communication system.", type: "Communications", orbit: {name: 'Low Earth Orbit'}},
        image: "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/electron25202_image_20220420085230.jpg",
        launch_service_provider: {name: 'SpaceX', description: "Space Exploration Technologies Corp., known as SpaceX, is an American aerospace manufacturer and space transport services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX operates from many pads, on the East Coast of the US they operate from SLC-40 at Cape Canaveral Space Force Station and historic LC-39A at Kennedy Space Center. They also operate fro..."},
        vidURLs: [{url: "https://youtube.com/watch?v=s6yBwQSrtFY"}],
        probability: 70,
        rocket: {configuration: {full_name: 'Falcon 9 Block 5', description: "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit. The Block 5 variant is the fifth major interval aimed at improving upon the ability for rapid reusability."}},
        pad: {name: 'Space Launch Complex 40', map_image:"https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg", location: {name: "Cape Canaveral, FL, USA"}}
        },
        {
        id: "2c5447d7-36c5-40fd-88de-47ed6b258bdb",
        name: "Falcon 9 Block 5 | Starlink Group 4-14",
        window_start: "2022-04-21T15:16:00Z",
        status:{name: 'Go for Launch', description: "Current T-0 confirmed by official or reliable sources."},
        mission_patches: [{image_url: "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/mission_patch_images/space2520x252_mission_patch_20210606182401.png"}],
        mission: {description: "A batch of 53 satellites for Starlink mega-constellation - SpaceX's project for space-based Internet communication system.", type: "Communications", orbit: {name: 'Low Earth Orbit'}},
        image: "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/electron25202_image_20220420085230.jpg",
        launch_service_provider: {name: 'SpaceX', description: "Space Exploration Technologies Corp., known as SpaceX, is an American aerospace manufacturer and space transport services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX operates from many pads, on the East Coast of the US they operate from SLC-40 at Cape Canaveral Space Force Station and historic LC-39A at Kennedy Space Center. They also operate fro..."},
        vidURLs: [{url: "https://youtube.com/watch?v=s6yBwQSrtFY"}],
        probability: 70,
        rocket: {configuration: {full_name: 'Falcon 9 Block 5', description: "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit. The Block 5 variant is the fifth major interval aimed at improving upon the ability for rapid reusability."}},
        pad: {name: 'Space Launch Complex 40', map_image:"https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg", location: {name: "Cape Canaveral, FL, USA"}}
        },
        {
        id: "d786d8fc-862b-45bf-8f7b-9ad862883f67",
        name: "Falcon 9 Block 5 | Crew-4",
        window_start: "2022-04-21T15:16:00Z",
        status:{name: 'Go for Launch', description: "Current T-0 confirmed by official or reliable sources."},
        mission_patches: [{image_url: "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/mission_patch_images/space2520x252_mission_patch_20210606182401.png"}],
        mission: {description: "A batch of 53 satellites for Starlink mega-constellation - SpaceX's project for space-based Internet communication system.", type: "Communications", orbit: {name: 'Low Earth Orbit'}},
        image: "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/electron25202_image_20220420085230.jpg",
        launch_service_provider: {name: 'SpaceX', description: "Space Exploration Technologies Corp., known as SpaceX, is an American aerospace manufacturer and space transport services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX operates from many pads, on the East Coast of the US they operate from SLC-40 at Cape Canaveral Space Force Station and historic LC-39A at Kennedy Space Center. They also operate fro..."},
        vidURLs: [{url: "https://youtube.com/watch?v=s6yBwQSrtFY"}],
        probability: 70,
        rocket: {configuration: {full_name: 'Falcon 9 Block 5', description: "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit. The Block 5 variant is the fifth major interval aimed at improving upon the ability for rapid reusability."}},
        pad: {name: 'Space Launch Complex 40', map_image:"https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg", location: {name: "Cape Canaveral, FL, USA"}}
        }]
    }
  }
}


describe('Single Launch flow', () => {

  it('should show user single launch page with unique URL', () => {
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?limit=20&mode=detailed', singleLaunch()).as('getSingleLaunch')
    cy.visit('http://localhost:3000/launches/2c5447d7-36c5-40fd-88de-47ed6b258bdb')
    .get('.mission-name').contains('Falcon 9 Block 5 | Starlink Group 4-14')
  });

  it('should show user mission details', () => {
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?limit=20&mode=detailed', singleLaunch()).as('getSingleLaunch')
    cy.visit('http://localhost:3000/launches/2c5447d7-36c5-40fd-88de-47ed6b258bdb')
    .get('.description').contains("A batch of 53 satellites for Starlink mega-constellation - SpaceX's project for space-based Internet communication system.")
    .get('.orbit').contains('Low Earth Orbit')
    .get('.rocket-type').contains('Rocket: Falcon 9 Block 5')
    .get('.launch-vid').should('have.attr', 'href').should('include', "https://youtube.com/watch?v=s6yBwQSrtFY")
  });

  it('should route the user back to the main dashboard when they click exit', () => {
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?limit=20&mode=detailed', singleLaunch()).as('getSingleLaunch')
    cy.visit('http://localhost:3000/launches/2c5447d7-36c5-40fd-88de-47ed6b258bdb')
    .get('.back-to-main').click()
    .url().should('eq', 'http://localhost:3000/')
  });

  it('should be able to bookmark a launch', () => {
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?limit=20&mode=detailed', singleLaunch()).as('getSingleLaunch')
    cy.visit('http://localhost:3000/launches/2c5447d7-36c5-40fd-88de-47ed6b258bdb')
    .get('.single-launch-page').find('.bookmark-btn').click()
    .contains('Launch Bookmarked')
  });

})