import assert from 'node:assert/strict';
import { arbelos, sector, polar, parseAnswer } from '../lib/geometry.ts';
import { challenges } from '../lib/challenges.ts';
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-9, `${a} differs from ${b}`);
assert.equal(challenges.length,24);
assert.equal(new Set(challenges.map(q=>q.id)).size,24);
for(let group=0;group<6;group++) assert.equal(challenges.filter(q=>q.group===group).length,4);
for(const q of challenges){
  for(const language of ['en','id']){
    for(const key of ['title','prompt','question','insight','feedback'])assert.ok(q[key][language]);
    for(const hint of [...q.hints,...q.solution])assert.ok(hint[language]);
  }
  if(q.type==='choice')assert.ok(q.options.some(o=>o.value===q.answer));
}
// Every slider position must retain exact tangencies and the perimeter invariant.
for(let a=4;a<=16;a++){
  const g=arbelos(20,a);
  near(g.left+g.right,400);near(g.perimeterPi,20);near(g.areaPi,a*(20-a)/4);
  assert.ok(g.left/2>0&&g.right/2>0);
}
near(arbelos(20,10).areaPi,25);near(arbelos(20,8).areaPi,24);
near(arbelos(28,14).areaPi*22/7,154);
const a=polar(180,310,220,0),b=polar(180,310,220,90);
near(a.x,400);near(a.y,310);near(b.x,180);near(b.y,90);
assert.ok(sector(180,310,220,0,90).endsWith('Z'));
// Calculate expected answers independently from the stored question bank.
const numeric={2:20,4:7*22/7+14,5:16/2,6:28/4,7:(24-8)/2,8:14**2-(22/7)*7**2,9:50-2*12.5,10:3.14*100/4-50,12:100-36,16:64/2,17:44/(2*22/7),18:36/(22/7+2),19:Math.sqrt(100-64),20:196/4,21:28**2-4*22/7*7**2,22:2*(22/7)*14**2/4-14**2,23:440/(2*22/7*7),24:154};
for(const [id,expected] of Object.entries(numeric))near(challenges[Number(id)-1].answer,expected);
assert.equal(parseAnswer('28,5'),28.5);assert.equal(parseAnswer('7/2'),3.5);
assert.equal(parseAnswer('20π',true),20);assert.equal(parseAnswer('20pi',true),20);
assert.equal(parseAnswer('1/0'),null);assert.equal(parseAnswer('1+2'),null);
console.log(`Passed: 24 bilingual missions, ${Object.keys(numeric).length} numeric results, all slider geometries, arc endpoints, and input parsing.`);
