# Carrot Market

## DB initial

### For windows

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # Optional: Needed to run a remote script the first time
irm get.scoop.sh | iex
iex "& {$(irm get.scoop.sh)} -RunAsAdmin"

scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
scoop install pscale mysql
scoop update pscale

### For mac

brew install planetscale/tap/pscale
brew install mysql-client
brew upgrade pscale

pscale database create carrot-market --region ap-northeast
npx prisma database push

## DB start

pscale connect carrot-market

## DB management

npx prisma studio

npx prisma db push
