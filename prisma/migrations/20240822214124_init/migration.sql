-- CreateTable
CREATE TABLE "contract" (
    "id" SERIAL NOT NULL,
    "clientname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "initialdate" TIMESTAMP(6) NOT NULL,
    "accountnumber" TEXT,
    "amount" BIGINT,
    "currency" INTEGER,

    CONSTRAINT "contract_pkey" PRIMARY KEY ("id")
);
