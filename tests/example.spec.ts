
import{test, expect,Locator} from'@playwright/test';
test("title",async ({page}) =>
  {
  await page.goto("https://www.amazon.in/");
  let name:string=await page.title();
  // console.log(await page.title());
  //console.log(name);
   let url:string=await page.url();
   console.log(url);
  await expect(page).toHaveURL(/amazon/);
  const popup= page.getByRole('button',{name:/continue shopping/i})
  await expect(popup).toBeVisible();
  await popup.click();
  /*
  //Role examples 1
  //const selllink=await expect(page.getByRole('link',{name:'Sell'})).toBeVisible();
  const selllink=page.getByRole('link', {name:'Sell', exact:true});
  await expect(selllink).toBeVisible();
      await selllink.click();
  //Role examples 2
  const img=page.getByRole('link',{name:'Amazon.in',exact:true});
  await expect(img).toBeVisible();
  await img.click();
  //Example of lable methodn 1
  const label= page.getByLabel('Search Amazon.in');
  await expect(label).toBeVisible();
  await label.fill('MOBIILRD');
  //Example of placeholder
const place=await page.getByPlaceholder('Search Amazon.in');
await expect(place).toBeVisible();
await place.fill("watches");
await place.click();
//locate with css selectorID
//const locateex:Locator=page.locator("input#twotabsearchtextbox");
//await expect(locateex).toBeVisible(); 
//await locateex.fill("Samsung Galaxy A55 5G");
//await locateex.click();
//await page.keyboard.press('Enter');
//locate with css selectorID 1
//const practiceID:Locator= page.locator("#nav_cs_3");
//const practiceID= page.getByRole('link', {name:'Bestsellers', exact:true});
//await expect(practiceID).toBeVisible();
//await practiceID.click();*/
//css selector .class(NOT WORKING YOU NEED MORE CLARITY)
//const classprac:Locator=page.locator(".nav-a");
//await expect(classprac).toBeVisible();
//wait classprac.click();
//
//await classprac.fill("nothing");
//await page.keyboard.press('Enter');
//getByAltText method
const alttext=page.getByAltText("Shop the Samsung Store on Amazon");
await expect(alttext).toBeVisible();
await alttext.click();




  



})