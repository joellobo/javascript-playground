// ... same data shape ...
const data = {
    timestamp: new Date(),
    user: {
      name: '',
      address: undefined
    }
  }
  
  // ... now, using optional chaining we can save quite a bunch of keytrokes ...
  if (data.user.address?.street) {
    console.log('looking up street number...')
  } else {
    console.log('missing street number!')
  }