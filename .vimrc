call plug#begin('~/.vim/plugged')

Plug 'morhetz/gruvbox'

Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
Plug 'jiangmiao/auto-pairs'
Plug 'neoclide/coc.nvim', {'branch': 'release'}

call plug#end()

syntax on

set background=dark
colorscheme desert


" =============================
" GENERAL CONFIG
" =============================
" LEADER
" =============================
let mapleader = " "

" =============================
" ENCODING
" =============================
set encoding=utf-8
set fileencoding=utf-8

" =============================
" NUMEROS
" =============================
set number

" =============================
" GENERAL
" =============================
set updatetime=300
set title
set autoindent
set smartindent
set hlsearch
set nobackup
set showcmd
set cmdheight=1
set laststatus=2
set expandtab
set scrolloff=10
set ignorecase
set smarttab
set breakindent
set shiftwidth=2
set tabstop=2
set nowrap
set splitbelow
set splitright
set mouse=

" =============================
" BACKSPACE
" =============================
set backspace=indent,eol,start

" =============================
" PATH & WILDIGNORE
" =============================
set path+=**
set wildignore+=*/node_modules/*

" =============================
" FORMAT OPTIONS
" =============================
set formatoptions+=r

" =============================
" TERMINAL COLORS (si aplica)
" =============================
if &term =~ 'xterm'
  let &t_Cs = "\e[4:3m"
  let &t_Ce = "\e[4:0m"
endif



" =============================
" COC - FORMAT ON SAVE
" =============================
autocmd BufWritePre *.js,*.jsx,*.ts,*.tsx :silent! CocCommand prettier.formatFile

" =============================
" COC - ESLINT FIX ON SAVE
" =============================
autocmd BufWritePre *.js,*.jsx,*.ts,*.tsx :silent! CocCommand eslint.executeAutofix

" =============================
" CTRL + S = GUARDAR
" =============================
nnoremap <C-s> :w<CR>
inoremap <C-s> <Esc>:w<CR>
vnoremap <C-s> <Esc>:w<CR>


" =============================
" COC DIAGNOSTICS VISUAL
" =============================
set updatetime=300
set signcolumn=yes

" =============================
" ESLINT COLORS
" =============================
hi CocErrorSign guifg=#ff5555 ctermfg=Red
hi CocWarningSign guifg=#f1fa8c ctermfg=Yellow
hi CocInfoSign guifg=#8be9fd ctermfg=Cyan
hi CocHintSign guifg=#50fa7b ctermfg=Green

hi CocErrorHighlight guifg=NONE guibg=NONE gui=undercurl cterm=underline
hi CocWarningHighlight guifg=NONE guibg=NONE gui=undercurl cterm=underline

set signcolumn=yes

" =============================
" SHOW ERROR MESSAGE
" =============================
nnoremap <silent> K :call CocActionAsync('doHover')<CR>



nnoremap <silent> [g <Plug>(coc-diagnostic-prev)
nnoremap <silent> ]g <Plug>(coc-diagnostic-next)

inoremap <silent><expr> <CR> pumvisible() ? coc#_select_confirm() : "\<CR>"


" =============================
" CURSOR STYLE
" =============================
if exists('$TMUX')
  let &t_SI = "\e[6 q" " Insert mode: line cursor
  let &t_EI = "\e[2 q" " Normal mode: block cursor
else
  let &t_SI = "\e[6 q"
  let &t_EI = "\e[2 q"
endif



" =============================
" FILETYPES
" =============================
augroup filetypes
  autocmd!
  autocmd BufNewFile,BufRead *.astro set filetype=astro
  autocmd BufNewFile,BufRead Podfile set filetype=ruby
augroup END


nnoremap sf :Files<CR>


" curl -fLo ~/.vim/autoload/plug.vim --create-dirs \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
" vim ~/.vimrc


" git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
" ~/.fzf/install
" :CocInstall coc-tsserver coc-json coc-html coc-css




