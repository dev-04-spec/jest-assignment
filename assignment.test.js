const {validSkills,userOne,addSkillsToUser,validateSkills}=require('./assignment');


describe('check of validSkills',()=>{
   
  it("should validSkills is an Array",() => {
     expect(Array.isArray(validSkills)).toBeTruthy();
  });
  it("should validSkills is an non empty Array",() => {
    expect(validSkills).not.toBeNull();
 });
  it("should validSkills is contain of ['Javascript','React']",() => {
    expect(validSkills).toEqual(expect.arrayContaining(['Javascript','React']));
 });
 it("should validSkills does not contain of ['Angular','Java']",() => {
    expect(validSkills).not.toEqual(expect.arrayContaining(['Angular','Java']));
 });
  
});
describe('check for validateSkills',()=>{
    it('Should be valid skill for validateSkills',()=>{
        expect(validateSkills(['Javascript'])).toBeUndefined();
    });
    it('Should be invalid skill for validateSkills',()=>{
        expect(()=>validateSkills(['Angular'])).toThrow(new Error('Invalid skill'));
    })
})
describe('check for userOne',()=>{
    it('Should be check is an object',()=>{
        expect(typeof userOne).toBe("object");
    });
    it('Should be check is an non empty object',()=>{
        expect(userOne).not.toBeNull();
    });
    it('Should be check object Id property is 1',()=>{
        expect(userOne.id).toBe(1);
    })
    it('Should be check object Id property is not 2',()=>{
        expect(userOne.id).not.toBe(2);
    });
   
});

describe('check for addSkillsToUser',()=>{
    it('Should be throw an error for already user having skill',()=>{
        expect(()=>addSkillsToUser(userOne,validSkills)).toThrow(new Error('User already has skill'));
       
    });
})

