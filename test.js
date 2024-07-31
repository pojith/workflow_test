const t=require('./SUM');
  
test("is sucessfully:",()=>{ expect(t(2,3)).toBe(5)})
test("is sucessfully:",()=>{ expect(t(7,3)).toBe(10)})
test("is sucessfully:",()=>{ expect(t(9,80)).toBe(89)})