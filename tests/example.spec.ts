
import{test, expect} from'@playwright/test';
test("title",async ({page}) =>
  {
  await page.goto("https://www.amazon.in");
  let name:string=await page.title();
  // console.log(await page.title());
  //console.log(name);
   let url:string=await page.url();
   console.log(url);
  await expect(page).toHaveURL(/amazon/);
  const popup= page.getByRole('button',{name:/continue shopping/i})
  await expect(popup).toBeVisible();
  popup.click();
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

  



})