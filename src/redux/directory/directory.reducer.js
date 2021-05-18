const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: `${process.env.PUBLIC_URL}hats.png`,
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: `${process.env.PUBLIC_URL}jackets.png`,
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: `${process.env.PUBLIC_URL} sneakers.png`,
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: `${process.env.PUBLIC_URL}  womens.png `,
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: `${process.env.PUBLIC_URL} men.png`,
          size: 'large',
          id: 5,
          linkUrl: 'shop/men'
        }
      ]
}

const directoryReducer = ( (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
})

export default directoryReducer