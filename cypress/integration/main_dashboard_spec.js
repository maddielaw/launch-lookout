

const upcomingLaunches = () => {
  return {
    statusCode: 200,
    ok: true,
    body: {
      results: [
        {
        id: "2c5447d7-36c5-40fd-88de-47ed6b258bdb",
        name: "Falcon 9 Block 5 | Starlink Group 4-14",
        window_start: "2022-04-21T15:16:00Z",
        mission: {description: "A batch of 53 satellites for Starlink mega-constellation - SpaceX's project for space-based Internet communication system."},
        image: "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/electron25202_image_20220420085230.jpg",
        launch_service_provider: {name: 'SpaceX'}
        },
        {
        id: "5e915de9-f574-433b-bf39-d90b616c0e8b",
        name: "Electron | There and Back Again",
        window_start: "2022-04-22T22:35:00Z",
        mission: {description: "Commercial rideshare mission including payloads for Alba Orb"},
        image: "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20220308100515.jpeg",
        launch_service_provider: {name: 'Rocket Lab Ltd'}
        },
        {
        id: "0f770177-f502-465b-9ea5-d7a053ec903c",
        name: "Angara 1.2 | MKA-R",
        window_start: "2022-04-27T00:00:00Z",
        mission: {description: "Russian military radar satellite."},
        image: "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launcher_images/angara25201.2_image_20190224012254.jpeg",
        launch_service_provider: {name: "Khrunichev State Research and Production Space Center"}
        }]
    }
  }
}

const upcomingEvents = () => {
  return {
    statusCode: 200,
    ok: true,
    body: {
      results: [
        {
        id: 332,
        name: "SpaceX AX-1 Crew Dragon Undocking",
        description: "The AX-1 Crew Dragon will undock from the International Space Station, carrying Axiom Space Mission 1 commander Michael López-Alegría and passengers Larry Connor, Eytan Stibbe and Mark Pathy. It will then reenter the Earth's atmosphere and splashdown in the Atlantic Ocean.",
        location: 'International Space Station',
        date: "2022-04-21T16:00:00Z",
        video_url: "https://www.youtube.com/watch?v=GBFZghqrI_4"
        },
        {
        id: 333,
        name: "SpaceX AX-1 Crew Dragon Splashdown",
        description: "The AX-1 Crew Dragon will splashdown in the Gulf of Mexico, bringing Axiom Space Mission 1 commander Michael López-Alegría and passengers Larry Connor, Eytan Stibbe and Mark Pathy back to Earth after spending a few days on the International Space Station.",
        location: "Gulf of Mexico, southwest of Pensacola, FL, USA",
        date: "2022-04-22T09:00:00Z",
        video_url: null
        }]
    }
  }
}


describe('Main dashboard flow', () => {

  it('should display the header', () => {
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?limit=20&mode=detailed', upcomingLaunches()).as('getLaunches')
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/event/upcoming/?limit=20&mode=detailed', upcomingEvents()).as('getEvents')
    cy.visit('http://localhost:3000/')
    .get('.header').contains('🔭 Launch Lookout')
    .get('button').contains('My Bookmarked Launches')
});


  it('should display the next upcoming launch', () => {
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?limit=20&mode=detailed', upcomingLaunches()).as('getLaunches')
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/event/upcoming/?limit=20&mode=detailed', upcomingEvents()).as('getEvents')
    cy.visit('http://localhost:3000/')
    .get('.next-launch-name').contains('Next Launch: Falcon 9 Block 5 | Starlink Group 4-14')
    .get('.next-launch-date').contains('2022-04-21T15:16:00Z')
  })

  it('should display a list of the next upcoming launches', () => {
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?limit=20&mode=detailed', upcomingLaunches()).as('getLaunches')
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/event/upcoming/?limit=20&mode=detailed', upcomingEvents()).as('getEvents')
    cy.visit('http://localhost:3000/')
    .get('.upcoming-header').contains('Upcoming Launches')
    .get('.upcoming-cards-container').find('.launch-card').should('have.length', 2)
  })

   it('should display launch cards that include details on the launch', () => {
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?limit=20&mode=detailed', upcomingLaunches()).as('getLaunches')
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/event/upcoming/?limit=20&mode=detailed', upcomingEvents()).as('getEvents')
    cy.visit('http://localhost:3000/')
    .get('.launch-card').first().find('img').should('have.attr', 'src').should('include', 'https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20220308100515.jpeg')
    .get('.launch-mission-description').contains('Commercial rideshare mission including payloads for Alba Orb')
  })

  it('should display 20 upcoming events', () => {
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?limit=20&mode=detailed', upcomingLaunches()).as('getLaunches')
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/event/upcoming/?limit=20&mode=detailed', upcomingEvents()).as('getEvents')
    cy.visit('http://localhost:3000/')
    .get('.events-header').contains('Upcoming Events in Spaceflight')
    .get('.events-container').find('.event-card').should('have.length', 2)
  })

  it('should display event cards with details on the event', () => {
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?limit=20&mode=detailed', upcomingLaunches()).as('getLaunches')
    cy.intercept('GET', 'https://spacelaunchnow.me/api/ll/2.2.0/event/upcoming/?limit=20&mode=detailed', upcomingEvents()).as('getEvents')
    cy.visit('http://localhost:3000/')
    .get('.event-card').first().get('.event-name').contains('SpaceX AX-1 Crew Dragon Undocking')
    .get('.event-card').first().get('.event-description').contains(`The AX-1 Crew Dragon will undock from the International Space Station, carrying Axiom Space Mission 1 commander Michael López-Alegría and passengers Larry Connor, Eytan Stibbe and Mark Pathy. It will then reenter the Earth's atmosphere and splashdown in the Atlantic Ocean.`)
    .get('.event-card').first().get('.event-video-link').should('have.attr', 'href').should('include', "https://www.youtube.com/watch?v=GBFZghqrI_4")
  })
})