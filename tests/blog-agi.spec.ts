import { test } from '@playwright/test';
import { BlogAgiPage } from '../src/pages/blogAgi.page';

test.describe('Blog do Agi - Teste Tecnico', () => {
  test('deve navegar pelo menu principal para a categoria Pix e exibir URL, título e conteúdo coerentes', async ({ page }) => {
    const blogAgiPage = new BlogAgiPage(page);

    await blogAgiPage.goTo();
    await blogAgiPage.accessBlogAgi();
    await blogAgiPage.accessPixPage();

    await blogAgiPage.validatePixUrl();
    await blogAgiPage.validatePixTitle();
    await blogAgiPage.validatePixContent();
  });

  test('deve validar que o email ja foi utilizado para o cadastro newsletter', async ({ page }) => {
    const blogAgiPage = new BlogAgiPage(page);

    await blogAgiPage.goTo();
    await blogAgiPage.accessBlogAgi();

    await blogAgiPage.fillEmailField();
    await blogAgiPage.validateFieldNewsletter();
    await blogAgiPage.clickSubscribeButton();
    await blogAgiPage.validateNewsletterSuccessMessage();
  });
});