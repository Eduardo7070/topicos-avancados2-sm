// src/validator.test.ts
// O compilador de TypeScript resolverá o módulo JavaScript de forma transparente
import validarChamado from './validator';

describe('Suíte de Testes - Validador de Chamados (Service Desk)', () => {
    
    test('Deve validar com sucesso um chamado com título preenchido', () => {
        const resultado = validarChamado("Erro de conexão com o banco MySQL");
        expect(resultado).toBe(true);
    });

    test('Deve lançar erro se o título do chamado for vazio', () => {
        expect(() => {
            validarChamado("");
        }).toThrow("O título do chamado não pode ser vazio.");
    });

    test('Deve lançar erro se o título for composto apenas por espaços em branco', () => {
        expect(() => {
            validarChamado("   ");
        }).toThrow("O título do chamado não pode ser vazio.");
    });

     test('Deve lançar erro se o título for menor que 5 caracters', () => {
        expect(() => {
            validarChamado("adsa");
        }).toThrow("O título deve possuir entre 5 e 100 caracteres.");
    });

    test('Deve lançar erro se o título tiver mais que 100 caracteres', () => {
        const titulo101Caracteres = "a".repeat(101);
        
        expect(() => {
            validarChamado(titulo101Caracteres);
        }).toThrow("O título deve possuir entre 5 e 100 caracteres.");
    });
});
