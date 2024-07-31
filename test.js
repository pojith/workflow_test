const t=require('./SUM');
const lp=require('./wrk')
test("is sucessfully:",()=>{ expect(t("jenfier","law")).toBe("jenfierlaw")})
test("is sucessfully:",()=>{ expect(lp()).toBe("heloo")})
test("is sucessfully:",()=>{ expect(t("dhar","shni")).toBe("dharshni")})