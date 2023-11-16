document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.category');

    sections.forEach(section => {
        const button = section.querySelector('button');
        const content = section.querySelector('.content');

        button.addEventListener('click', function () {
            // Перевіряємо, чи розділ відкритий чи закритий
            const isOpened = section.classList.contains('hidden');

            // Закриваємо всі розділи
            sections.forEach(s => s.classList.add('hidden'));

            if (!isOpened) {
                // Відкриваємо тільки вибраний розділ
                section.classList.remove('hidden');
            }
        });
    });
});
