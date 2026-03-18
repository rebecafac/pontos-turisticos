#!/bin/bash

if [ "$VERCEL_GIT_COMMIT_REF" != "main" ]; then
  echo "⛔ Ignorando build da branch $VERCEL_GIT_COMMIT_REF"
  exit 0
fi

echo "✅ Permitindo build"
exit 1