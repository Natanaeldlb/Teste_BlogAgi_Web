import { Page, Locator, expect } from '@playwright/test';

export class BlogAgiPage {
  readonly page: Page;
  readonly agiBankInitial: Locator;
  readonly menuProdutos: Locator;
  readonly categoriesPix: Locator;

  readonly pixTitle: Locator;
  readonly pixContent: Locator;
  readonly inputEmailNewsletter: Locator;
  readonly titleNewsletter: Locator;
  readonly buttonAssinar: Locator;
  readonly messageSuccessNewsletter: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.agiBankInitial = page.locator('xpath=//*[@id="menu-item-3713"]/a/span[2]');
    this.menuProdutos = page.locator('xpath=//*[@id="menu-item-3714"]/a');
    this.categoriesPix = page.locator('xpath=//*[@id="menu-item-3725"]/a');
    this.pixTitle = page.locator('xpath=//*[@id="primary"]/section/h1');
    this.pixContent = page.locator('xpath=//*[@id="main"]/div');
    this.inputEmailNewsletter = page.locator('xpath=//*[@id="subscribe-field-blog_subscription-3"]');
    this.titleNewsletter = page.locator('xpath=//*[@id="blog_subscription-3"]/h2');
    this.buttonAssinar = page.locator('xpath=//*[@id="subscribe-submit"]/button');
    this.messageSuccessNewsletter = page.locator('xpath=//*[@id="blog_subscription-3"]/p');
  }

    async goTo() {
        await this.page.goto('https://blog.agibank.com.br/');
    }

    async accessBlogAgi() {
        await this.agiBankInitial.click();
    }

    async accessPixPage() {
        await this.menuProdutos.hover();
        await expect(this.categoriesPix).toBeVisible();
        await this.categoriesPix.click();
    }

    async validatePixUrl() {
        await expect(this.page).toHaveURL(/pix/i);
    }

    async validatePixTitle() {
        await expect(this.pixTitle).toBeVisible();
        await expect(this.pixTitle).toContainText(/pix/i);
    }

    async validatePixContent() {
        await expect(this.pixContent).toBeVisible();
        await expect(this.pixContent).toContainText(/pix/i);
    }

    async fillEmailField() {
        await this.inputEmailNewsletter.fill('natanaeldlb1@gmail.com');
    }

    async validateFieldNewsletter() {
        await expect(this.titleNewsletter).toBeVisible();
        await expect(this.titleNewsletter).toContainText('Inscreva-se em nossa Newsletter');
    }

    async clickSubscribeButton() {
        await this.buttonAssinar.click();
    }

    async validateNewsletterSuccessMessage() {
        await expect(this.messageSuccessNewsletter).toBeVisible();
        await expect(this.messageSuccessNewsletter).toContainText('Você já assinou este site. Verifique sua caixa de entrada.');
    }
}