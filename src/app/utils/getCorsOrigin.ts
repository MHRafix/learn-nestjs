const getCorsOrigin = (origin) => {
    if (origin === '*') {
      return origin;
    }
    //    check is array
    if (Array.isArray(JSON.parse(origin))) {
      return origin;
    }
  };
  
  export default getCorsOrigin;